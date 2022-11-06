
let precio = 2000;
let presupuestoFinal = true;

let nombre = prompt("Bienvenid@, ingrese su nombre por favor");

let personas = Number(prompt("Ingrese en numeros la cantidad de personas/invitados al evento"));

if (personas > 0) {
    presupuestoFinal = true;
}
else {
    alert("No ingreso un numero valido.")
    presupuestoFinal = false;
}


let costo = (precio*personas);
let casamiento = 1.5;
let cumpleanios = 1.5;
let empresarial = 2;
let otro = 2;


let tipoEvento = Number(prompt( "Elija el tipo de evento a realizar - Ingrese numero que corresponda \n1- Casamiento \n2- Cumpleaños \n3- Empresarial \n4- Otro"));


while (presupuestoFinal == true) {
    switch (tipoEvento) {
        case 1:
            alert("El presupuesto aproximado para tu evento es " + "$" + (costo * casamiento) + ". Gracias por elegirnos " + nombre + "! " + " Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!" );
            presupuestoFinal = false
            break;
        case 2:
            alert("El presupuesto aproximado para tu evento es " + "$" +(costo * cumpleanios) + ". Gracias por elegirnos " + nombre + "! "  + " Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!");
            presupuestoFinal = false
            break;
        case 3:
            alert("El presupuesto aproximado para tu evento es " + "$" + (costo * empresarial) + ". Gracias por elegirnos " + nombre + "! " + " Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!" );
            presupuestoFinal = false
            break;
        case 4:
            alert("El presupuesto aproximado para tu evento es " + "$" + (costo * otro) + ". Gracias por elegirnos " + nombre + "! " + " Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!");
            presupuestoFinal = false
            break;
    };
};

presupuestoFinal = true

alert( "Le vamos a solicitar datos de contacto para que un asesor se comunique con usted y poder brindarle una atencion personalizada" )

let nombres = prompt( "Ingrese su nombre y apellido")
let email = prompt( "Ingrese su direccion de email")
let telefono = prompt( "Ingrese su numero de telefono con caracteristica y 15 si corresponde")

const contacto = {
    nombres: nombres,
    email: email,
    telefono: telefono,
}

alert( "Los datos ingresados son " + "Nombres: " + contacto.nombres + ". Email: " + contacto.email + ". Telefono: " + contacto.telefono + ". En la brevedad nos contactaremos con ustedes para brindar toda la informacion sobre nuestro servicio y realizar un presupuesto detallado")



