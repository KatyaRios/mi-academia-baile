function operar(tipo) {
    // 1. Captura y conversión inmediata
    const a = Number(document.getElementById('n1').value);
    const b = Number(document.getElementById('n2').value);
    const visor = document.getElementById('res');
    let resultado = 0;

    // 2. Lógica de selección de operación
    switch (tipo) {
        case 'sumar':
            resultado = a + b;
            break;
        case 'restar':
            resultado = a - b;
            break;
        case 'multiplicar':
            resultado = a * b;
            break;
        case 'dividir':
            // Lógica de validación: División por cero
            if (b === 0) {
                visor.innerText = "Error: Div por 0";
                visor.style.color = "red";
                return; // Cortamos la ejecución aquí
            }
            resultado = a / b;
            break;
        default:
            resultado = "Operación no válida";
    }

    // 3. Salida de datos
    visor.innerText = `Resultado: ${resultado}`;
    visor.style.color = "#0056b3";
    console.log(`Operación ${tipo} realizada con éxito.`);
}