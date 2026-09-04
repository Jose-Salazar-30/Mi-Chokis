// Capturamos los botones iniciales
const btnNo1 = document.getElementById('btn-no-1');
const btnSi1 = document.getElementById('btn-si-1');
const btnSi2 = document.getElementById('btn-si-2');

// Función principal para cambiar de pantalla
function mostrarPantalla(idPantallaDestino) {
    // 1. Ocultamos todas las pantallas quitando la clase 'active'
    const pantallas = document.querySelectorAll('.screen');
    pantallas.forEach(pantalla => {
        pantalla.classList.remove('active');
        pantalla.classList.add('hidden');
    });

    // 2. Mostramos la pantalla que queremos
    const pantallaDestino = document.getElementById(idPantallaDestino);
    pantallaDestino.classList.remove('hidden');
    pantallaDestino.classList.add('active');
}

// Eventos de los botones de inicio
btnSi1.addEventListener('click', () => {
    // Si dice sí en la primera pantalla, vamos directo al menú de corazones
    mostrarPantalla('pantalla-menu');
});

btnNo1.addEventListener('click', () => {
    // Si dice "No gracias", mostramos la pantalla de insistencia
    mostrarPantalla('pantalla-2');
});

btnSi2.addEventListener('click', () => {
    // Cuando finalmente dice que sí en la pantalla de insistencia, va al menú
    mostrarPantalla('pantalla-menu');
});