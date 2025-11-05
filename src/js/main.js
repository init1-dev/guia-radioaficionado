
// Navegación TOC active link
document.querySelectorAll('.toc-link').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth', block: 'start' });
}));

// Search (client-side): show matching sections by heading and text
const q = document.getElementById('q');
q.addEventListener('input', () => search(q.value));
function search(term) {
    const s = term.trim().toLowerCase();
    const sections = document.querySelectorAll('article section');
    sections.forEach(sec => {
        const text = sec.innerText.toLowerCase();
        if (!s) { sec.style.display = 'block'; } else {
            sec.style.display = text.includes(s) ? 'block' : 'none';
        }
    });
    // highlight toc
    document.querySelectorAll('nav a').forEach(a => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target && target.style.display === 'none') a.style.display = 'none'; else a.style.display = 'block';
    });
}

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

// Accessibility: focus search on load
window.addEventListener('load', () => document.getElementById('q').focus());
