
/**
 * main.js (refactor)
 * - Split responsibilities into small functions
 * - Init sequence centralized in `initApp`
 * - Defensive checks for missing DOM nodes
 */

// -------------------- Helpers --------------------
const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

const qs = (selector, ctx = document) => ctx.querySelector(selector);
const qsa = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

// Smooth scroll handler (delegated) for any element with .toc-link
function initSmoothScroll() {
    document.addEventListener('click', (ev) => {
        const el = ev.target.closest('.toc-link');
        if (!el) return;
        const href = el.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        ev.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// -------------------- Mobile TOC / Search bar --------------------
function initMobileToc() {
    const tocToggleBtn = qs('#toc-toggle-btn');
    const tocCloseBtn = qs('#toc-close-btn');
    const tocNav = qs('#toc');
    const overlay = qs('#overlay');

    if (!tocNav) return;

    const openToc = () => { tocNav.classList.add('toc-mobile-open'); document.body.classList.add('overlay-active'); };
    const closeToc = () => { tocNav.classList.remove('toc-mobile-open'); document.body.classList.remove('overlay-active'); };

    if (tocToggleBtn) tocToggleBtn.addEventListener('click', openToc);
    if (tocCloseBtn) tocCloseBtn.addEventListener('click', closeToc);
    if (overlay) overlay.addEventListener('click', closeToc);

    // move search bar between header and toc on breakpoint
    const header = qs('header');
    const searchElement = qs('#search');
    const versionInfo = header ? header.querySelector('div[style*="min-width"]') : null;
    const tocList = qs('#index-list');

    function moveSearchbar() {
        if (!searchElement || !header || !tocNav) return;
        if (window.innerWidth <= 900) {
            if (searchElement.parentElement !== tocNav && tocList) tocNav.insertBefore(searchElement, tocList);
        } else {
            if (searchElement.parentElement !== header && versionInfo) header.insertBefore(searchElement, versionInfo);
        }
    }

    moveSearchbar();
    window.addEventListener('resize', moveSearchbar);

    return { closeToc, openToc };
}

// -------------------- Build index (TOC) --------------------
function buildIndex(closeTocCallback) {
    const tocList = qs('#index-list');
    const article = qs('#main');
    if (!tocList || !article) {
        console.error('No se pudo encontrar la lista del índice o el artículo principal.');
        return;
    }
    tocList.innerHTML = '';

    // Add top-level link
    const topLi = document.createElement('li');
    topLi.innerHTML = `<li><a href="#hero-banner" class="toc-link toc-h2">Guía del Radioaficionado</a></li>`;
    tocList.appendChild(topLi);

    const sections = article.querySelectorAll('section');
    sections.forEach((section, i) => {
        const h2 = qs('h2', section);
        if (!h2) return;

        const sectionId = section.id || slugify(h2.textContent);
        section.id = sectionId;

        const sectionTitle = `${i + 1}. ${h2.textContent}`;
        const li = document.createElement('li');
        const details = document.createElement('details');
        const summary = document.createElement('summary');

        const summarySpan = document.createElement('span');
        summarySpan.textContent = sectionTitle;
        summarySpan.classList.add('toc-link', 'toc-h2');
        summary.appendChild(summarySpan);

        // Manage click behavior on summary (expand/collapse or navigate)
        summary.addEventListener('click', (ev) => {
            ev.preventDefault();
            const h3s = section.querySelectorAll('h3');
            if (h3s.length > 0) {
                details.open = !details.open;
                if (details.open) location.hash = sectionId;
            } else {
                location.hash = sectionId;
            }
        });

        details.appendChild(summary);

        const h3s = section.querySelectorAll('h3');
        if (h3s.length > 0) {
            const subUl = document.createElement('ul');
            h3s.forEach(h3 => {
                const h3Id = h3.id || slugify(`${sectionId}-${h3.textContent}`);
                h3.id = h3Id;
                const h3Li = document.createElement('li');
                h3Li.innerHTML = `<a href="#${h3Id}" class="toc-link toc-h3">${h3.textContent}</a>`;
                subUl.appendChild(h3Li);
            });
            details.appendChild(subUl);
        } else {
            details.classList.add('empty');
        }

        // Close mobile TOC when building index if small screen
        if (window.innerWidth <= 900 && typeof closeTocCallback === 'function') {
            closeTocCallback();
        }

        li.appendChild(details);
        tocList.appendChild(li);
    });
}

// -------------------- Scroll spy (active link) --------------------
function initScrollSpy() {
    const tocLinks = qsa('nav a');
    let sections = qsa('article section');

    function onScroll() {
        // refresh sections in case DOM changed
        sections = qsa('article section');
        let idx = sections.findIndex(sec => sec.getBoundingClientRect().top > 120);
        if (idx === -1) idx = sections.length - 1;
        tocLinks.forEach(a => a.classList.remove('active'));
        const current = sections[Math.max(0, idx - 1)];
        if (current) {
            const link = qs(`nav a[href="#${current.id}"]`);
            if (link) link.classList.add('active');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once to seed state
    onScroll();
}

// -------------------- TOC search/filter --------------------
function initTocSearch() {
    const searchInput = qs('#q');
    const tocList = qs('#index-list');
    if (!searchInput || !tocList) return;

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const tocItems = Array.from(tocList.children);

        tocItems.forEach(li => {
            const details = qs('details', li);
            const h2Span = qs('.toc-h2', li);
            const h3ListItems = Array.from(li.querySelectorAll('ul > li'));

            const h2Text = h2Span ? h2Span.textContent.toLowerCase() : '';
            const h2Matches = h2Text.includes(searchTerm);

            let hasVisibleH3 = false;
            h3ListItems.forEach(h3Li => {
                const h3Link = qs('a', h3Li);
                const h3Text = h3Link ? h3Link.textContent.toLowerCase() : '';
                const h3Matches = h3Text.includes(searchTerm);
                h3Li.style.display = (h2Matches || h3Matches) ? '' : 'none';
                if (h3Matches) hasVisibleH3 = true;
            });

            li.style.display = (h2Matches || hasVisibleH3) ? '' : 'none';

            if (details) {
                if (searchTerm && hasVisibleH3 && !h2Matches) details.open = true;
                else if (!searchTerm) details.open = false;
            }
        });
    });
}

// -------------------- Initialization --------------------
function initApp() {
    initSmoothScroll();
    const mobileTocApi = initMobileToc();
    buildIndex(mobileTocApi && mobileTocApi.closeToc);
    initScrollSpy();
    initTocSearch();
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Accessibility note: focus search on load (enable if desired)
// window.addEventListener('load', () => document.getElementById('q')?.focus());