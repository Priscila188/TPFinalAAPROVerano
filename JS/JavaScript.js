window.alert("¡Bienvenido/a a nuestro Sitio Web!")
  
let edad = prompt("Ingresa tu edad");

if(parseInt(edad) >= 18 ) {
    alert ("Sos mayor, ¡Podes ingresar al sitio web!")
} else {
    alert ("Debes ser mayor de edad para ingresar al sitio. Entra bajo tu resposabilidad")
}

var opcion = prompt ("¿Se encuentra dentro de San Nicolás o en un radio de hasta 40 km?")

if (opcion == "si") {
    alert ("¡El servicio a domicilio es GRATIS!")
} else {
    alert ("El servicio a domicilio tiene un valor de $800")
}
