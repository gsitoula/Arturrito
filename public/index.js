//Formulatio de Validación

function validateForm() {
    var username = document.getElementById( /*"username"*/ ).value;
    var password = document.getElementById( /*"password"*/ ).value;
    if (username == null || username == "") {
        alert("Por favor, poné tu Nombre de Usuario.");
        return false;
    }
    if (password == null || password == "") {
        alert("Porque favor, poné tu contraseña.");
        return false;
    }
    alert("Conectado");
    onSuccsess(client);
}

$(document).ready(function() {

    $.getJSON("/getcompras", function(result) {
        console.log(result);
    });
    

})