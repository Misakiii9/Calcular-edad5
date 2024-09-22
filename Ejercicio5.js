function calcularEdad() {

    let fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    let hoy = new Date();
    
    if (isNaN(fechaNacimiento.getTime())) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa una fecha de nacimiento válida.";
        return;
    }

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        <p>Tu edad es: ${edad} años.</p>
    `;
}