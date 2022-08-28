function alerta(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    alert("Hola "+nombre+"! Te contactaremos lo mas pronto posible, ya sea por tu correo: "+email+" o telefono: "+telefono+", tu mensaje fue: "+mensaje)
}