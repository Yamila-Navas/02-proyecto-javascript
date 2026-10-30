// Simulador de ...

// bandera para finalizar el bucle
let entrada = true
let validarOpcion = true

// datos mascotas
let nombres = ''

// Cantidad aprox de alimento que una mascota consumiria al mes (en kilos)
const alimento_chico = 2
const alimento_mediano = 5
const alimento_grande = 10

// calculos
let costo_alimento_kilo = 0
let cantidad_mascotas = 0
let total_kilos_alimento_mensual = 0
let costo_total_alimento_mensual = 0
let resumen

// programa
alert(
    '¡Bienvenido al Simulador de Alimentación para Mascotas! 🐾\n\n' +
    'Registra a tus mascotas y calcula cuánto alimento necesitas comprar por mes y cuál será el costo total.'
)

costo_alimento_kilo = parseFloat(prompt('¿Cuál es el precio de 1 kg de alimento para mascotas?'))

while(entrada){
    let nombre = prompt('Ingresa el nombre de tu mascota:')
    
    while(validarOpcion){
        let opt_tamanio = Number(prompt(
            'Selecciona el tamaño de tu mascota:\n\n' +
            '1 - Chico\n' +
            '2 - Mediano\n' +
            '3 - Grande'
        ))
        switch (opt_tamanio) {
            case 1:
                total_kilos_alimento_mensual += alimento_chico
                validarOpcion = false
                break
            case 2:
                total_kilos_alimento_mensual += alimento_mediano
                validarOpcion = false
                break
            case 3:
                total_kilos_alimento_mensual += alimento_grande
                validarOpcion = false
                break
            default:
                alert('Opción incorrecta. Por favor, selecciona 1, 2 o 3 para indicar el tamaño de tu mascota.')
                break
        }
    }
    // validarOpcion
    validarOpcion = true
    
    // contadores
    cantidad_mascotas += 1
    nombres += `${nombre} - `

    while(validarOpcion){
        let opt_salida = Number(prompt(
            '¿Qué deseas hacer?\n\n' +
            '1 - Registrar otra mascota\n' +
            '2 - Finalizar y ver el reporte'
        ))
        switch (opt_salida) {
            case 1 :
                validarOpcion = false
                break
            case 2 :
                validarOpcion = false
                entrada = false
                break
            default:
                alert('Opción incorrecta. Ingresa 1 para registrar otra mascota o 2 para finalizar y ver el reporte.')
                break
        }
    }

    // validarOpcion
    validarOpcion = true
}

costo_total_alimento_mensual = total_kilos_alimento_mensual * costo_alimento_kilo

resumen = `
    REPORTE MENSUAL:\n
    Cantidad de mascotas: ${cantidad_mascotas}\n
    Nombres: ${nombres}\n
    Alimento necesario por mes: ${total_kilos_alimento_mensual} kg\n
    Costo total del alimento: $${costo_total_alimento_mensual}
`

alert(resumen)