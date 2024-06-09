document.addEventListener("DOMContentLoaded", function() {  // Espera a que la página esté completamente cargada

    var contadorElemento = document.getElementById("contador"); // Obtiene el elemento del id contador
    var tiempoInicial = 60;                 // Estable los segundos del contador
    var tiempoRestante = tiempoInicial;        // Inicializa el contador con lo que le hemos dicho arriba

    function actualizarCuentaRegresiva() {
        contadorElemento.textContent = tiempoRestante + " segundos"; // Actualiza el contenido del contador

        if (tiempoRestante > 0) {               // Si el tiempo restante es mayor que 0 
            tiempoRestante--;
            setTimeout(actualizarCuentaRegresiva, 1000);    // Llama otra vez a la funcion despues de 1000 milisegundos(1 segundo)
        } else {
            tiempoRestante = tiempoInicial; 
            setTimeout(actualizarCuentaRegresiva, 1000); // Reinicia el contador
        }
    }

    actualizarCuentaRegresiva();    // Llama a la función cuando inicia la página
});
