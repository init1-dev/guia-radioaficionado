 // -------------------- App Info --------------------
const APP_INFO = {
    version: '1.1.0',
    updateDate: '10/11/2025',
    updateVersion() {
        const versionEl = document.querySelectorAll('.version');
        const dayEl = document.querySelector('.updateDay');
        const dateEl = document.querySelector('.updateDate');

        if (versionEl) versionEl.forEach(element => element.textContent = this.version);

        // determine date object: prefer explicit updateDate, else current date
        let dateObj;
        if (this.updateDate) {
            const parts = this.updateDate.includes('/')
                ? String(this.updateDate).split('/')
                : String(this.updateDate).split('-');
            const [d, m, y] = parts;

            dateObj = new Date(`${y}-${m}-${d}`);
        } else {
            dateObj = new Date();
        }

        // Day name in Spanish, capitalized
        const dayName = dateObj.toLocaleDateString('es-ES', { weekday: 'long' });
        const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);

        const dd = String(dateObj.getDate()).padStart(2, '0');
        const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
        const yyyy = dateObj.getFullYear();
        const formatted = `${dd}/${mm}/${yyyy}`;

        if (dayEl) dayEl.textContent = capitalizedDay;
        if (dateEl) dateEl.textContent = formatted;
    }
};

export { APP_INFO };