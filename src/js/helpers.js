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

export { slugify, qs, qsa, initSmoothScroll };