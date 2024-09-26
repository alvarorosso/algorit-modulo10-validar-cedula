// Función que implementa el algoritmo de Luhn (Módulo 10)
function validarCedula(cedula) {
    let suma = 0;
    let alt = false;

    for (let i = cedula.length - 1; i >= 0; i--) {
        let n = parseInt(cedula.charAt(i), 10);

        if (alt) {
            n *= 2;
            if (n > 9) n -= 9;
        }

        suma += n;
        alt = !alt;
    }

    return (suma % 10 === 0);
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const cedula = document.getElementById("cedula").value;
    const cedulaError = document.getElementById("cedulaError");
    
    if (!validarCedula(cedula)) {
        cedulaError.textContent = "Cédula inválida. Por favor verifica el número.";
        cedulaError.style.display = "block";
    } else {
        cedulaError.style.display = "none";
        alert("Formulario enviado con éxito");
        // Aquí puedes añadir la lógica para enviar el formulario o hacer algo más
    }
});
