function guardarUsuario(event) {        //Funcion que se ejecuta cuando se manda el formulario
    event.preventDefault();         //Para que la pagina no se recargue al mandar el formulario

    const nombre = document.getElementById('nombre').value; //Nos da el valor de nombre
    const email = document.getElementById('email').value; //Nos da el valor de email

    if (!validarEmail(email)) {
        alert('¡El correo electrónico no tiene un formato válido!');        //Alerta de que el email no es valido
        return;
    }

    const usuario = {       //Crea el usuario con el nombre y el email
        nombre: nombre,
        email: email
    };
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;         //Busca que el email tenga un @ y que haya algo antes y despues del punto
    return regex.test(email);       //Si el email cumple True si no False
}
