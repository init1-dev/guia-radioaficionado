import { defineConfig } from 'vite';

// Usar rutas relativas en la salida para que el sitio funcione desde `docs/` o abriendo
// `index.html` directamente (útil para GitHub Pages en modo project page).
export default defineConfig({
    base: './',
});
