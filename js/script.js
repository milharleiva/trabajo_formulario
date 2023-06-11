function validar() {

    var ret_nombre = validar_nombre();
    var ret_check = validar_check();
    var ret_correo = validar_correo();
    var ret_contraseña = validar_contraseña();
    var ret_direccion = validar_direccion();
    var ret_web = validar_web();
    var ret_telefono = validar_telefono();
    var ret_hobby = validar_hobby();
    var ret_codigo_postal = validar_codigo_postal();

    // Si todas las validaciones son verdaderas, se envía el formulario
    return  ret_nombre && ret_codigo_postal && ret_check && ret_telefono && ret_correo && ret_contraseña && ret_direccion && ret_web && ret_hobby;
}

function validar_nombre() {
    var nombre = document.getElementById("nombre").value;
    var div = document.getElementById("err_nombre");

    if (nombre == "") {
        div.innerText = "El nombre no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_check() {
    var check = document.getElementById("check").checked;
    var div = document.getElementById("err_check");

    if (!check) {
        div.innerText = "Debe aceptar los términos y condiciones";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_correo() {
    var correo = document.getElementById("correo").value;
    var div = document.getElementById("err_correo");

    if (correo == ""){
        div.innerText = "Correo no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else if (!correo.includes("@") || !correo.includes(".")) {
        div.innerText = "Por favor, ingrese un correo electrónico válido";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_contraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var conpass = document.getElementById("conpass").value;
    var div = document.getElementById("err_contraseña");
    var div_conpass = document.getElementById("err_conpass");  // Referencia al contenedor de errores de confirmar contraseña

    var tieneLetra = false;
    var tieneNumero = false;

    for (var i = 0; i < contraseña.length; i++) {
        if (isNaN(contraseña[i])) {
            tieneLetra = true;
        } else {
            tieneNumero = true;
        }
    }

    if (contraseña == "") {
        div.innerText = "La contraseña no puede estar en blanco.";
        div.className = "text-danger";
        return false;
    } else if (contraseña.length < 3 || contraseña.length > 6) {
        div.innerText = "La contraseña debe tener de 3 a 6 caracteres.";
        div.className = "text-danger";
        return false;
    } else if (!tieneLetra) {
        div.innerText = "La contraseña debe contener al menos una letra.";
        div.className = "text-danger";
        return false;
    } else if (!tieneNumero) {
        div.innerText = "La contraseña debe contener al menos un número.";
        div.className = "text-danger";
        return false;
    } else if (contraseña !== conpass) {
        div.innerText = "La confirmación no coincide con la contraseña.";
        div_conpass.innerText = "La confirmación no coincide con la contraseña."; // Establece el mensaje de error en el contenedor de confirmar contraseña
        div.className = "text-danger";
        div_conpass.className = "text-danger"; // Establece la clase de error en el contenedor de confirmar contraseña
        return false;
    } else {
        div.innerText = "";
        div_conpass.innerText = ""; // Limpia el mensaje de error del contenedor de confirmar contraseña
        return true;
    }
}

function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direccion");

    if (direccion == ""){
        div.innerText = "La dirección es obligatoria";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_telefono() {
    var str_telefono = document.getElementById("telefono").value;
    var div = document.getElementById("err_telefono");

    // Remover espacios al inicio y al final
    str_telefono = str_telefono.trim();

    // Verificar si es un número y su longitud
    if (isNaN(str_telefono)){
        div.innerText= "Por favor, ingresa un número válido";
        div.className = "text-danger";
        return false;
    } else if (str_telefono.length != 9) {
        div.innerText= "Los números de teléfono deben tener 9 dígitos.";
        div.className = "text-danger";
        return false;
    } else if (str_telefono[0] != '9') {
        div.innerText= "Los números de móvil deben comenzar con 9.";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_hobby() {
    var list = document.getElementById("hobbyList");
    var div = document.getElementById("err_hobby");
    if (list.getElementsByTagName("li").length < 2){
        div.innerText = "Debe ingresar al menos dos aficiones.";
        div.className = "text-danger";
        return false;
    }else{
        div.innerText = "";
        return true;
    }
}

function addHobbyToList() {
    var hobby = document.getElementById("hobby").value;
    if (hobby != '') {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(hobby));
        li.className = "list-group-item";
        document.getElementById("hobbyList").appendChild(li);
        document.getElementById("hobby").value = '';
    }
}

document.getElementById("addHobby").addEventListener('click', function(event){
    event.preventDefault(); 
    addHobbyToList();
});

function validar_comuna() {
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("err_comuna");

    if (comuna == "" || comuna == "Elija su comuna"){
        div.innerText = "Debe seleccionar una comuna";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}


function validar_web() {
    var web = document.getElementById("web").value;
    var div = document.getElementById("err_web");

    // Comprueba si la web contiene al menos un '.' y no comienza ni termina con él
    if (web == "" || web.indexOf('.') == -1 || web[0] == '.' || web[web.length-1] == '.') {
        div.innerText = "Por favor, ingrese una URL válida";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_codigo_postal() {
    var codigo_postal = document.getElementById("codigo_postal").value;
    var div = document.getElementById("err_codigo_postal");

    // Validar que el código postal tenga exactamente 7 dígitos
    if (codigo_postal == "" || codigo_postal.length != 7 || isNaN(codigo_postal)) {
        div.innerText = "El código postal debe ser un número de 7 dígitos";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}