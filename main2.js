
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
            break;
        case 2:
            alert("El presupuesto aproximado para tu evento es " + "$" +(costo * cumpleanios) + ". Gracias por elegirnos " + nombre + "! "  + " Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!");
            break;
        case 3:
            alert("El presupuesto aproximado para tu evento es " + "$" + (costo * empresarial) + ". Gracias por elegirnos " + nombre + "! " + " Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!" );
            break;
        case 4:
            alert("El presupuesto aproximado para tu evento es " + "$" + (costo * otro) + ". Gracias por elegirnos " + nombre + "! " + " Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!");
            break;
    };
};

presupuestoFinal = false

alert("Contactate a nuestro WhatsApp o mediante nuestras Redes Sociales para recibir atencion personalizada!")