
// Navegación TOC active link
document.querySelectorAll('.toc-link').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
}));

// small helper: activate toc on scroll
const tocLinks = document.querySelectorAll('nav a');
const sections = Array.from(document.querySelectorAll('article section'));
window.addEventListener('scroll', () => {
    let idx = sections.findIndex(sec => sec.getBoundingClientRect().top > 120);
    if (idx === -1) idx = sections.length - 1;
    tocLinks.forEach(a => a.classList.remove('active'));
    const current = sections[Math.max(0, idx - 1)];
    if (current) { const link = document.querySelector('nav a[href="#' + current.id + '"]'); if (link) link.classList.add('active'); }
});

// Accessibility: focus search on load (deshabilitar durante eldesarrollo)
// window.addEventListener('load', () => document.getElementById('q').focus());

document.addEventListener('DOMContentLoaded', () => {
    const tocList = document.getElementById('index-list');
    const article = document.getElementById('main');

    if (!tocList || !article) {
        console.error("No se pudo encontrar la lista del índice o el artículo principal.");
        return;
    }
    tocList.innerHTML = '';

    const sections = article.querySelectorAll('section');

    const slugify = (text) => {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    const indice = document.createElement('li');
    indice.innerHTML = `<li><a href="#hero-banner" class="toc-link toc-h2">Guía del Radioaficionado</a></li>`;
    tocList.appendChild(indice);

    sections.forEach((section, i) => {
        const h2 = section.querySelector('h2');
        if (!h2) return;

        const sectionId = section.id;
        const sectionTitle =`${i + 1}. ${h2.textContent}`;

        const mainLi = document.createElement('li');

        const details = document.createElement('details');
        const summary = document.createElement('summary');
        
        const summaryTitle = document.createElement('span');
        summaryTitle.textContent = sectionTitle;
        summaryTitle.classList.add('toc-link', 'toc-h2');
        summary.appendChild(summaryTitle);

        const h3s = section.querySelectorAll('h3');

        summary.addEventListener('click', (e) => {
            e.preventDefault();

            // Abrir/cerrar solo si tiene sub-elementos
            if (h3s.length > 0) {
                // Si tiene sub-elementos, gestiona el despliegue.
                if (!details.open) {
                    // Si está cerrado, lo abre y navega.
                    details.open = true;
                    location.hash = sectionId;
                } else {
                    // Si está abierto, solo lo cierra.
                    details.open = false;
                }
            } else {
                // Si no tiene sub-elementos, siempre navega.
                location.hash = sectionId;
            }
        });

        details.appendChild(summary);

        if (h3s.length > 0) {
            const subUl = document.createElement('ul');
            h3s.forEach(h3 => {
                const h3Id = h3.id || slugify(`${sectionId}-${h3.textContent}`);
                h3.id = h3Id;
                subUl.innerHTML += `<li><a href="#${h3Id}" class="toc-link toc-h3">${h3.textContent}</a></li>`;
            });
            details.appendChild(subUl);
        } else {
            details.classList.add('empty');
        }

        mainLi.appendChild(details);
        tocList.appendChild(mainLi);
    });

    const searchInput = document.getElementById('q');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const tocItems = tocList.querySelectorAll(':scope > li');

            tocItems.forEach(li => {
                const details = li.querySelector('details');
                const h2Span = li.querySelector('.toc-h2');
                const h3ListItems = li.querySelectorAll('ul > li');

                const h2Text = h2Span.textContent.toLowerCase();
                const h2Matches = h2Text.includes(searchTerm);
                
                let hasVisibleH3 = false;
                h3ListItems.forEach(h3Li => {
                    const h3Link = h3Li.querySelector('a');
                    const h3Text = h3Link.textContent.toLowerCase();
                    const h3Matches = h3Text.includes(searchTerm);

                    if (h2Matches || h3Matches) {
                        h3Li.style.display = '';
                        if (h3Matches) hasVisibleH3 = true;
                    } else {
                        h3Li.style.display = 'none';
                    }
                });

                if (h2Matches || hasVisibleH3) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }

                if (details) {
                    if (searchTerm && hasVisibleH3 && !h2Matches) {
                        details.open = true;
                    } else if (!searchTerm) {
                        details.open = false;
                    }
                }
            });
        });
    }
});

