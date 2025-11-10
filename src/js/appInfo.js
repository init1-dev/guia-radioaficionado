 // -------------------- App Info --------------------
const APP_INFO = {
    version: '1.1.0',
    updateDate: '10/11/2025 15:09',
    updateVersion() {
        const versionEl = document.querySelectorAll('.version');
        const dayEl = document.querySelector('.updateDay');
        const dateEl = document.querySelector('.updateDate');

        if (versionEl) versionEl.forEach(element => element.textContent = this.version);

        // determine date object: prefer explicit updateDate, else current date
        let dateObj;
        if (this.updateDate) {
            const [datePart, timePart = '00:00'] = String(this.updateDate).split(' ');
            const parts = datePart.includes('/')
                ? datePart.split('/')
                : datePart.split('-');
            const [d, m, y] = parts;
            const [hours, minutes] = timePart.split(':');

            dateObj = new Date(`${y}-${m}-${d}T${hours}:${minutes}`);
        } else {
            dateObj = new Date();
        }

        // Day name in Spanish, capitalized
        const dayName = dateObj.toLocaleDateString('es-ES', { weekday: 'long' });
        const capitalizedDay = dayName.charAt(0).toUpperCase() + dayName.slice(1);

        // Formatear fecha con hora
        const formatted = dateObj.toLocaleString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).replace(',', ' -');

        if (dayEl) dayEl.textContent = capitalizedDay;
        if (dateEl) dateEl.textContent = formatted;
    }
};

export { APP_INFO };