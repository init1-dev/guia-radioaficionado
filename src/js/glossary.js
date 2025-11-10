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
    
    // Saludos y Cortesía
    'GM': createTerm(
        ['GM'],
        'Good Morning: Buenos días.'
    ),
    'GA': createTerm(
        ['GA'],
        'Good Afternoon: Buenas tardes.'
    ),
    'GE': createTerm(
        ['GE'],
        'Good Evening: Buenas noches.'
    ),
    'GN': createTerm(
        ['GN'],
        'Good Night: Hasta mañana.'
    ),
    'GL': createTerm(
        ['GL'],
        'Good Luck: Suerte.'
    ),
    'PSE': createTerm(
        ['PSE'],
        'Please: Por favor. Término de cortesía.'
    ),
    'TKS': createTerm(
        ['TKS', 'TNX'],
        'Thanks: Gracias. Término de agradecimiento.'
    ),

    // Operadores y Referencias Personales
    'OM': createTerm(
        ['OM'],
        'Old Man: Término de respeto usado entre radioaficionados masculinos.'
    ),
    'YL': createTerm(
        ['YL'],
        'Young Lady: Término usado para referirse a una operadora.'
    ),
    'XYL': createTerm(
        ['XYL', 'Ex-YL'],
        'Ex-YL: Término usado para referirse a la esposa de un radioaficionado.'
    ),
    '73': createTerm(
        ['73'],
        'Saludos cordiales: Despedida formal entre radioaficionados.'
    ),
    '88': createTerm(
        ['88'],
        'Besos y abrazos: Despedida afectuosa, raramente usada.'
    ),
    'HI': createTerm(
        ['HI'],
        'Risa en CW: Expresión de humor en código Morse.'
    ),

    // Términos Técnicos de Operación
    'ANT': createTerm(
        ['ANT', 'Antenna', 'Antena'],
        'Antena: Abreviatura para referirse al sistema radiante.'
    ),
    'RX': createTerm(
        ['RX', 'Recepción'],
        'Recepción: Abreviatura para referirse a la escucha o recepción de señales.'
    ),
    'TX': createTerm(
        ['TX', 'Transmisión'],
        'Transmisión: Abreviatura para referirse a la emisión de señales.'
    ),
    'PWR': createTerm(
        ['PWR', 'Power'],
        'Power: Potencia en vatios usada en la transmisión.'
    ),
    'WX': createTerm(
        ['WX', 'Weather'],
        'Weather: Término usado para referirse al clima o condiciones meteorológicas.'
    ),
    'RPT': createTerm(
        ['RPT', 'Repeat'],
        'Repeat: Solicitud de repetición cuando no se ha copiado bien el mensaje.'
    ),
    'Roger': createTerm(
        ['Roger'],
        'Roger: Confirmación de recepción del mensaje.'
    ),
    'CQ': createTerm(
        ['CQ', 'Llamada General'],
        'Llamada general: Inicio de QSO, invitación a cualquier estación para establecer contacto.'
    ),

    // Códigos Q para Control de Transmisión
    'QSY': createTerm(
        ['QSY'],
        'Pregunta: ¿Cambio de frecuencia? / Respuesta: Cambio a... (nueva frecuencia).'
    ),
    'QTR': createTerm(
        ['QTR'],
        'Pregunta: ¿Qué hora es? / Respuesta: Son las... (hora).'
    ),
    'QRL': createTerm(
        ['QRL'],
        'Pregunta: ¿Está la frecuencia ocupada? / Respuesta: La frecuencia está en uso.'
    ),
    'QRV': createTerm(
        ['QRV'],
        'Pregunta: ¿Está listo? / Respuesta: Estoy listo.'
    ),
    'QRX': createTerm(
        ['QRX'],
        'Pregunta: ¿Puede esperar? / Respuesta: Espero, pausa en la comunicación.'
    ),
    'QRT': createTerm(
        ['QRT'],
        'Pregunta: ¿Cierra estación? / Respuesta: Cierro la estación.'
    ),
    'QRZ': createTerm(
        ['QRZ'],
        'Pregunta: ¿Quién me llama? / Respuesta: Le llama... (identificación).'
    ),

    // Códigos Q para Ajustes de Transmisión
    'QRO': createTerm(
        ['QRO'],
        'Pregunta: ¿Aumento potencia? / Respuesta: Use alta potencia (>100W).'
    ),
    'QRS': createTerm(
        ['QRS'],
        'Pregunta: ¿Transmito más despacio? / Respuesta: Transmita más despacio (CW).'
    ),
    'QRQ': createTerm(
        ['QRQ'],
        'Pregunta: ¿Transmito más rápido? / Respuesta: Transmita más rápido (CW).'
    ),

    // Códigos Q para Calidad de Señal
    'QRK': createTerm(
        ['QRK'],
        'Pregunta: ¿Cuál es mi legibilidad (1-5)? / Respuesta: Su legibilidad es... (1-5).'
    ),
    'Legibilidad': createTerm(
        ['Legibilidad', 'Readability'],
        'Medida de la claridad con que se recibe una señal, calificada del 1 al 5, donde 5 es perfectamente legible.'
    ),
    'QRM': createTerm(
        ['QRM'],
        'Pregunta: ¿Tiene interferencias? / Respuesta: Tengo interferencias (de origen humano).'
    ),
    'Interferencias': createTerm(
        ['Interferencias', 'Interference'],
        'Señales no deseadas que afectan la comunicación, pueden ser de origen humano (QRM) o natural (QRN).'
    ),
    'QRN': createTerm(
        ['QRN'],
        'Pregunta: ¿Hay ruido atmosférico? / Respuesta: Hay ruido atmosférico.'
    ),
    'Ruido Natural': createTerm(
        ['Ruido Natural', 'Ruido Atmosférico', 'Natural Noise'],
        'Interferencias de origen natural como tormentas eléctricas, radiación solar u otros fenómenos atmosféricos.'
    ),
    'QSB': createTerm(
        ['QSB'],
        'Pregunta: ¿Mi señal varía? / Respuesta: Su señal fluctúa (fading).'
    ),
    'Señal Variable': createTerm(
        ['Señal Variable', 'Fading', 'Desvanecimiento'],
        'Variación en la intensidad de una señal recibida, comúnmente conocida como fading o desvanecimiento.'
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
        ['QRP'],
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
    'REMER': createTerm(
        ['REMER', 'R.E.M.E.R.', 'Red Radio Emergencia', 'Red de Emergencia'],
        'Red de Emergencia de Radio: Organización de radioaficionados voluntarios que colaboran con Protección Civil en situaciones de emergencia en España.'
    ),
    
    // Medidas y Potencia
    'dB': createTerm(
        ['dB', 'Decibelio', 'Decibel', 'dBm'],
        'Unidad logarítmica para medir relaciones de potencia. +3dB duplica la potencia, -3dB la reduce a la mitad. dBm: potencia referida a 1 milivatios.'
    ),
    'PEP': createTerm(
        ['PEP', 'P.E.P.', 'Peak Envelope Power', 'Potencia Pico'],
        'Peak Envelope Power (Potencia Pico de Envolvente): Potencia máxima instantánea durante la transmisión, especialmente importante en modos SSB.'
    ),
    'PRA': createTerm(
        ['PRA', 'p.r.a.', 'Potencia Radiada Aparente'],
        'Potencia Radiada Aparente: Potencia efectiva que una antena irradia en su dirección de máxima ganancia, considerando las pérdidas del sistema y la ganancia de la antena.'
    ),
    'PIRE': createTerm(
        ['PIRE', 'p.i.r.e.', 'Potencia Isotrópica Radiada Equivalente', 'EIRP'],
        'Potencia Isotrópica Radiada Equivalente: Cantidad de potencia que emitiría una antena isotrópica teórica para producir la densidad de potencia observada en la dirección de máxima ganancia.'
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
    'LUF': createTerm(
        ['LUF', 'L.U.F.', 'Lowest Usable Frequency', 'Frecuencia Mínima Utilizable'],
        'Lowest Usable Frequency: Frecuencia mínima utilizable por debajo de la cual hay demasiada absorción en la ionosfera.'
    ),
    'FOT': createTerm(
        ['FOT', 'F.O.T.', 'Frecuencia Óptima de Trabajo', 'Optimum Working Frequency'],
        'Optimum Working Frequency: Frecuencia óptima de trabajo, aproximadamente el 85% de la MUF.'
    ),
    'SFI': createTerm(
        ['SFI', 'Solar Flux Index', 'Índice de Flujo Solar'],
        'Solar Flux Index: Medida de la actividad solar (70-300). Valores más altos indican mejor propagación en HF.'
    ),
    'SSN': createTerm(
        ['SSN', 'Sunspot Number', 'Número de Manchas Solares'],
        'Sunspot Number: Índice de manchas solares (0-300). Mayor número de manchas indica mejor propagación en HF.'
    ),
    'A-Index': createTerm(
        ['A-Index', 'Índice A', 'A Index'],
        'Índice de perturbaciones geomagnéticas (0-400). Valores 0-7 indican excelentes condiciones, >50 indica tormentas magnéticas.'
    ),
    'K-Index': createTerm(
        ['K-Index', 'Índice K', 'K Index'],
        'Índice de perturbaciones geomagnéticas locales medido cada 3 horas (0-9). Valores 0-2 indican buenas condiciones, >5 indica mala propagación.'
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

// Crear una expresión regular que combine todas las variantes de términos
const createGlossaryRegex = () => {
    const allTerms = Object.values(glossaryTerms).reduce((acc, { variants }) => {
        return acc.concat(variants.map(v => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }, []);
    
    // Ordenar términos por longitud (más largos primero) para manejar correctamente términos compuestos
    allTerms.sort((a, b) => b.length - a.length);
    
    return new RegExp(`\\b(${allTerms.join('|')})\\b`, 'gi');
};

// Función para buscar término en el glosario sin distinguir mayúsculas/minúsculas
function findGlossaryTerm(term) {
    return Object.values(glossaryTerms).find(({ variants }) => 
        variants.some(v => v.toLowerCase() === term.toLowerCase())
    );
}

// Función para procesar el texto y agregar tooltips

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

        // Usar la regex global para encontrar términos
        const regex = createGlossaryRegex();
        let match;

        while ((match = regex.exec(text)) !== null) {
            const term = match[0];
            const termData = findGlossaryTerm(term);

            if (termData) {
                modified = true;
                if (match.index > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));
                }

                const termSpan = createGlossaryElement(term, termData.definition);
                fragment.appendChild(termSpan);

                lastIndex = regex.lastIndex;
            }
        }

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