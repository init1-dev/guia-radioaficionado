// Función auxiliar para crear un término con variantes
const createTerm = (variants, definition) => ({ variants, definition });

export const glossaryTerms = {
    // Bandas y Frecuencias
    'LF': createTerm(
        ['LF', 'L.F.', 'Baja Frecuencia', 'Low Frequency'],
        'Low Frequency (Baja Frecuencia): Bandas entre 30-300 kHz, utilizadas principalmente para radionavegación y señales horarias.'
    ),
    'MF': createTerm(
        ['MF', 'M.F.', 'Media Frecuencia', 'Medium Frequency'],
        'Medium Frequency (Media Frecuencia): Bandas entre 300 kHz-3 MHz, incluye la banda de radiodifusión AM.'
    ),
    'HF': createTerm(
        ['HF', 'H.F.', 'H.F', 'Alta Frecuencia', 'High Frequency'],
        'High Frequency (Alta Frecuencia): Bandas entre 3-30 MHz, ideales para comunicación de larga distancia.'
    ),
    'VHF': createTerm(
        ['VHF', 'V.H.F.', 'V.H.F', 'Muy Alta Frecuencia', 'Very High Frequency'],
        'Very High Frequency (Muy Alta Frecuencia): Bandas entre 30-300 MHz, usadas para comunicación local/regional.'
    ),
    'UHF': createTerm(
        ['UHF', 'U.H.F.', 'U.H.F', 'Ultra Alta Frecuencia', 'Ultra High Frequency'],
        'Ultra High Frequency (Ultra Alta Frecuencia): Bandas entre 300-3000 MHz, ideal para comunicación urbana.'
    ),
    'SHF': createTerm(
        ['SHF', 'S.H.F.', 'S.H.F'],
        'Super High Frequency: Bandas de microondas por encima de 3 GHz.'
    ),
    
    // Modos de Operación
    'AM': createTerm(
        ['AM', 'A.M.', 'Amplitud Modulada'],
        'Amplitud Modulada: Modo de transmisión donde la amplitud de la onda portadora varía según la señal.'
    ),
    'FM': createTerm(
        ['FM', 'F.M.', 'Frecuencia Modulada'],
        'Frecuencia Modulada: Modo donde la frecuencia varía según la señal, más inmune al ruido.'
    ),
    'SSB': createTerm(
        ['SSB', 'S.S.B.', 'Banda Lateral Única', 'Single Side Band'],
        'Single Side Band: Modo de AM que transmite solo una banda lateral, más eficiente en potencia.'
    ),
    'LSB': createTerm(
        ['LSB', 'L.S.B.', 'Lower Side Band', 'Banda Lateral Inferior'],
        'Lower Side Band: Modo SSB que utiliza la banda lateral inferior, común en bandas por debajo de 10 MHz.'
    ),
    'USB': createTerm(
        ['USB', 'U.S.B.', 'Upper Side Band', 'Banda Lateral Superior'],
        'Upper Side Band: Modo SSB que utiliza la banda lateral superior, común en bandas por encima de 10 MHz.'
    ),
    'CW': createTerm(
        ['CW', 'C.W.', 'Continuous Wave', 'Morse'],
        'Continuous Wave: Telegrafía, usado para código Morse.'
    ),
    'RTTY': createTerm(
        ['RTTY', 'Radio Teletipo', 'Radioteletype'],
        'Radio Teletipo: Modo digital que utiliza el protocolo Baudot para transmitir texto.'
    ),
    'PSK31': createTerm(
        ['PSK31', 'PSK-31', 'Phase Shift Keying 31'],
        'Phase Shift Keying 31: Modo digital popular para comunicaciones de texto, opera a 31.25 baudios.'
    ),
    'PSK63': createTerm(
        ['PSK63', 'PSK-63', 'Phase Shift Keying 63'],
        'Phase Shift Keying 63: Variante más rápida del PSK31, opera a 62.5 baudios.'
    ),
    'FT8': createTerm(
        ['FT8', 'FT-8'],
        'Modo digital moderno que permite contactos breves incluso con señales muy débiles, usa períodos de 15 segundos.'
    ),
    'FT4': createTerm(
        ['FT4', 'FT-4'],
        'Versión más rápida del FT8, diseñada para concursos, usa períodos de 7.5 segundos.'
    ),
    'SSTV': createTerm(
        ['SSTV', 'S.S.T.V.', 'Slow Scan TV'],
        'Slow Scan Television: Sistema para transmitir imágenes fijas por radio.'
    ),
    'ATV': createTerm(
        ['ATV', 'A.T.V.', 'Amateur TV'],
        'Amateur Television: Transmisión de video en movimiento por radio aficionado.'
    ),
    
    // Códigos Q y Conceptos Técnicos
    'QSO': createTerm(
        ['QSO'],
        'Contacto por radio entre dos estaciones.'
    ),
    'QTH': createTerm(
        ['QTH', 'Ubicación', 'Localización'],
        'Ubicación o localización de una estación.'
    ),
    'QSL': createTerm(
        ['QSL', 'Confirmación', 'Tarjeta QSL'],
        'Confirmación de recepción o tarjeta de confirmación de contacto.'
    ),
    'DX': createTerm(
        ['DX', 'DXing', 'Dxing'],
        'Comunicación a larga distancia o con estaciones lejanas/raras.'
    ),
    'CTCSS': createTerm(
        ['CTCSS', 'Subtono', 'Tono Continuo', 'PL Tone'],
        'Continuous Tone-Coded Squelch System: Sistema de tonos subaudibles para acceso a repetidores.'
    ),
    'ROE': createTerm(
        ['ROE', 'SWR', 'R.O.E.', 'S.W.R.', 'VSWR', 'V.S.W.R.'],
        'Relación de Ondas Estacionarias: Medida de la adaptación entre transmisor y antena.'
    ),
    'CB27': createTerm(
        ['CB27', 'CB', 'Banda Ciudadana', 'Citizens Band', '27 MHz'],
        'Citizens Band: Banda ciudadana en 27 MHz, popular para comunicaciones locales sin licencia.'
    ),
    'QRP': createTerm(
        ['QRP', 'Baja Potencia'],
        'Operación en baja potencia, típicamente menos de 5W en CW o 10W en fonía.'
    ),
    'DMR': createTerm(
        ['DMR', 'Digital Mobile Radio'],
        'Digital Mobile Radio: Sistema de radio digital que permite dos conversaciones simultáneas en un canal.'
    ),
    'C4FM': createTerm(
        ['C4FM', 'Fusion', 'System Fusion'],
        'Continuous 4 Level FM: Sistema digital de Yaesu, compatible con FM analógico.'
    ),
    'APRS': createTerm(
        ['APRS', 'A.P.R.S.', 'Automatic Packet Reporting System'],
        'Sistema automático de reporte de posición: Red digital para compartir ubicación y mensajes cortos.'
    ),
    'GPS': createTerm(
        ['GPS', 'G.P.S.', 'Sistema de Posicionamiento Global'],
        'Global Positioning System: Sistema de navegación por satélite usado para determinar ubicación precisa.'
    ),
    
    // Equipamiento
    'Dipolo': createTerm(
        ['Dipolo', 'Dipole', 'Antena Dipolo'],
        'Antena básica formada por dos conductores de igual longitud.'
    ),
    'Yagi': createTerm(
        ['Yagi', 'Yagi-Uda', 'Antena Yagi'],
        'Antena directiva con elementos directores y reflectores.'
    ),
    'Balun': createTerm(
        ['Balun', 'Balum', 'Bal-un'],
        'Dispositivo para adaptar impedancias entre línea balanceada y no balanceada.'
    ),
    'Coaxial': createTerm(
        ['Coaxial', 'Cable Coaxial', 'Coax'],
        'Cable formado por un conductor central, aislante y malla exterior, usado para transmitir señales de RF con bajas pérdidas.'
    ),
    'Director': createTerm(
        ['Director', 'Elemento Director'],
        'Elemento parásito de una antena Yagi colocado frente al dipolo para dirigir la radiación en esa dirección.'
    ),
    'Reflector': createTerm(
        ['Reflector', 'Elemento Reflector'],
        'Elemento parásito de una antena Yagi colocado detrás del dipolo para reflejar la señal hacia adelante.'
    ),
    'Transceptor': createTerm(
        ['Transceptor', 'Transceiver', 'Radio'],
        'Equipo que combina transmisor y receptor en una sola unidad.'
    ),
    'Ground Plane': createTerm(
        ['Ground Plane', 'Plano de Tierra', 'GP'],
        'Antena vertical que utiliza radiales horizontales como plano de tierra para mejorar la radiación.'
    ),
    'VFO': createTerm(
        ['VFO', 'V.F.O.', 'Variable Frequency Oscillator'],
        'Oscilador de Frecuencia Variable: Control que permite cambiar la frecuencia de operación del equipo.'
    ),
    'Rig': createTerm(
        ['Rig', 'Equipo', 'Setup'],
        'Término informal para referirse al equipo de radio o a toda la estación en conjunto.'
    ),
    
    // Propagación
    'Skip': createTerm(
        ['Skip', 'Salto', 'Skip Distance'],
        'Propagación por rebote ionosférico.'
    ),
    'Ionosfera': createTerm(
        ['Ionosfera', 'Ionosphere', 'Capa Ionosférica'],
        'Capa de la atmósfera que refleja ondas de radio HF.'
    ),
    'MUF': createTerm(
        ['MUF', 'M.U.F.', 'Frecuencia Máxima Utilizable'],
        'Maximum Usable Frequency: Frecuencia máxima utilizable para comunicación ionosférica.'
    ),
    'Tropo': createTerm(
        ['Tropo', 'Troposférica', 'Troposcatter'],
        'Propagación troposférica: Alcance extendido por condiciones atmosféricas.'
    ),
    
    // Operación
    'Log': createTerm(
        ['Log', 'Logbook', 'Libro de Guardia', 'Registro'],
        'Registro detallado de los contactos realizados, incluyendo fecha, hora, frecuencia y reportes.'
    ),
    'Elmer': createTerm(
        ['Elmer', 'Mentor', 'Tutor'],
        'Radioaficionado experimentado que guía y ayuda a los principiantes en el hobby.'
    ),
    'PTT': createTerm(
        ['PTT', 'P.T.T.', 'Push-to-talk'],
        'Push To Talk: Botón para activar la transmisión.'
    ),
    'RST': createTerm(
        ['RST', 'R.S.T.', 'Signal Report'],
        'Readability, Strength, Tone: Sistema para reportar calidad de señal.'
    ),
    'UTC': createTerm(
        ['UTC', 'GMT', 'Zulu', 'Tiempo Universal'],
        'Tiempo Universal Coordinado: Hora estándar para radioaficionados.'
    ),
    'Split': createTerm(
        ['Split', 'Split Operation', 'Operación Split'],
        'Operación en frecuencias separadas de TX y RX.'
    ),
    'Pileup': createTerm(
        ['Pileup', 'Pile-up', 'Pile up', 'PileUp'],
        'Múltiples estaciones llamando simultáneamente a una estación DX.'
    )
};

const excludedTAgs = ['SCRIPT', 'STYLE', 'TEXTAREA', 'CODE', 'PRE','H3', 'H4'];

// Función para buscar término en el glosario sin distinguir mayúsculas/minúsculas
function findGlossaryTerm(word) {
    const normalizedWord = word.toLowerCase();
    for (const [key, termData] of Object.entries(glossaryTerms)) {
        // Comprobar si alguna variante coincide (ignorando mayúsculas/minúsculas)
        if (termData.variants.some(variant => variant.toLowerCase() === normalizedWord)) {
            return termData;
        }
    }
    return null;
}

// Función para crear un tooltip
function createTooltip(element, definition) {
    const rect = element.getBoundingClientRect();
    const tooltip = document.createElement('div');
    tooltip.className = 'glossary-tooltip';
    tooltip.textContent = definition;
    
    // Agregar tooltip al DOM temporalmente para obtener sus dimensiones
    tooltip.style.visibility = 'hidden';
    document.body.appendChild(tooltip);
    
    // Calcular dimensiones y límites
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calcular posición inicial centrada
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.bottom + 5;

    // Ajustar posición horizontal si se sale de la pantalla
    if (left < 10) {
        left = 10;
        tooltip.style.setProperty('--arrow-left', `${rect.left + (rect.width / 2) - left}px`);
    } else if (left + tooltipRect.width > viewportWidth - 10) {
        left = viewportWidth - tooltipRect.width - 10;
        tooltip.style.setProperty('--arrow-left', `${rect.left + (rect.width / 2) - left}px`);
    } else {
        tooltip.style.setProperty('--arrow-left', '50%');
    }

    // Ajustar posición vertical si está muy abajo
    if (top + tooltipRect.height > viewportHeight - 10) {
        top = rect.top - tooltipRect.height - 5;
        tooltip.classList.add('tooltip-top');
    }

    // Aplicar posición final y hacer visible
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.visibility = 'visible';

    return tooltip;
}

// Función para crear un elemento de término del glosario
function createGlossaryElement(text, definition) {
    const termSpan = document.createElement('span');
    termSpan.className = 'glossary-term';
    termSpan.setAttribute('data-definition', definition);
    termSpan.textContent = text;
    return termSpan;
}

// Función para procesar el texto y agregar tooltips
function processText(node) {
    if (node.nodeType === 3) { // Nodo de texto
        const text = node.nodeValue;
        let modified = false;
        let fragment = document.createDocumentFragment();
        let lastIndex = 0;

        // Buscar palabras en el texto (incluyendo guiones)
        const words = text.match(/\b[\w-]+\b/g);
        if (!words) return;

        let match;
        words.forEach(word => {
            const termData = findGlossaryTerm(word);
            if (termData) {
                modified = true;
                // Añadir texto anterior al término
                const wordIndex = text.indexOf(word, lastIndex);
                if (wordIndex > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.substring(lastIndex, wordIndex)));
                }

                // Crear el elemento del término
                const termSpan = createGlossaryElement(word, termData.definition);
                fragment.appendChild(termSpan);

                lastIndex = wordIndex + word.length;
            }
        });

        if (modified) {
            // Añadir el resto del texto si queda algo
            if (lastIndex < text.length) {
                fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
            }
            node.parentNode.replaceChild(fragment, node);
        }
    } else if (node.nodeType === 1 && // Elemento
                !excludedTAgs.includes(node.nodeName) && // Ignorar estos elementos
                !node.classList.contains('glossary-term')) { // Evitar procesamiento recursivo
        Array.from(node.childNodes).forEach(child => processText(child));
    }
}

export function initGlossary() {
    // Procesar el contenido principal
    const mainContent = document.querySelector('#main');
    if (mainContent) {
        processText(mainContent);

        // Agregar listener para mostrar tooltips en hover
        mainContent.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('glossary-term')) {
                const definition = e.target.getAttribute('data-definition');
                createTooltip(e.target, definition);
            }
        });

        mainContent.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('glossary-term')) {
                const tooltips = document.querySelectorAll('.glossary-tooltip');
                tooltips.forEach(t => t.remove());
            }
        });
    }
}