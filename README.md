                                -NUEVA DOCUMENTACIÓN-

Mi trabajo para esta 3º evalución consiste en seguir dandole funcionandoles a la misma pagina web que hice en la
segunda evaluacion.

El trabajo consistia en una pagina web de un supermercado ficticio en la que habia ofertas con contador y ademas
una pagina para hacer login en la que si no cumplias con el formato requerido daba error indicandolo.

Y ahora he implementado una base de datos con varias tablas en la que en una nueva pestaña de la pagina se pueden
hacer consultas y devuelve la informacion requerida.

------------------------------------------------------------------------

NUEVAS MODIFICACIONES (Comentarios en el código)

Pasos a seguir para el nuevo "app.js":

    1) Configuración de la conexión a MySQL

    2) Manejo de errores más detallado   

    3) Mensajes de registro más informativos

    4) Manejo de consultas más avanzado

    5) Seguridad de la conexión:

    6) Documentación del código:


También he tenido que crear la nueva pagina de "index.html"

    1) La página tiene una estructura de html básica.

    2) Metaetiquetas y título

    3) Los estilos estan integrados.

    4) Seccion para consultas.

    5) Seccion para el resultado de estas consultas.

    6) Script para la lógica de estas consultas.

Este "index.html" proporciona una interfaz de usuario simple para enviar consultas SQL al servidor y mostrar los resultados devueltos en la página web.


Estas consultas estan vinculadas con una base de datos llamada "test" y una contraseña "1234" para comprobar
su funcionamiento tenemos que tener una base de datos instalada y agregado algo de información a esta misma.

En el siguiente ejemplo hacemos una cosulta para saber el Nombre de los Clientes que tenemos en nuestra base de datos.
(https://gyazo.com/754fb53b8d4322014efd4878fdeba529)


---------------------ANTIGUA DOCUMENTACIÓN------------------------------


Tenemos que instalar Node.js (https://nodejs.org/) 
Una vez que lo hayamos instalado ejecutamos el comando "node -v" para comprobar que esta instalado.

Primeros pasos con un servidor de node.js con Express:
(https://expressjs.com/)


Express es un framework de aplicacion para node.js que proporciona metodos para crear aplicacion de 
servidor de una manera mas facil


Para iniciar debemos crear un proyecto con node.js 


STEP 1: Creamos un directorio, nos movemos a este mismo y usamos el comando "npm init --yes" y se nos 
crean varios .json (configuraciones de nuestro proyecto) 

STEP 2: Debemos instalar Express "npm install express" 

STEP 3: Dentro de el directorio de nuestro poyecto creamos un archivo llamado "app.js" y escribimos todo
lo que esta dentro del apartado "DENTRO DE app.js"

STEP 4: Ahora ya funcionaria nuestro servidor, ejecutamos el comando "node app.js"

------------ DENTRO DE app.js ------------

Creamos una constante que diga que requerimos que exista express.                    
    const express = required("express")


Creamos el objeto de nuestra aplicacion.                                       
    const app = express();


Le indicamos donde esta lo que tiene que ejecutar.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "principal.html"));
});


El servidor tiene que entrar por algun puerto.
app.listen(3000, () => {
    console.log("Sevidor funcionando en puerto", 3000);
});


------------PROYECTO------------

Lo que he hecho ha sido un servidor node con express en el que dentro tiene codigo html, css, js.
Todo lo que forma parte de servidor esta dentro de la pagina raiz "Expresserver" y lo que no es servidor esta dentro 
de una subcarpeta llamada public, en esta se encuentra todo los html, css y js


------------JS------------

El codigo hecho en js es una parte del login.html (formulario de registro) en el que el codigo JavaScript valida si la direccion
de correo electronico es valida y si no lo es saca un mensaje y no deja registrarse

El resto de codigo js esta hecho para la pagina principal.html en el que hay un contador, que cuando llega a 0 se resetea