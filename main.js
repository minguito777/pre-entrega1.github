// Pre-entrega1

let nombre = prompt('ingrese su nombre: ')

if (nombre == '') {
    alert('no ingresaste el nombre de usuario')
} else {
    alert('Bienvenido : ' + nombre)
}


let auto = ''
let seguro = ''
let tiempo = 0
let precio = 0
let inflacion = 0.35



function sumarSeguro(auto, seguro) {
    subTotal = auto + seguro
}
function cuota(subTotal, inflacion) {
    cuotaMes = subTotal * inflacion
}

function sumarInflacion(cuotaMes, inflacion) {
    mesAmes = cuotaMes * inflacion
}



do {
    auto = prompt('¿Que auto le gustaria asegurar ' + nombre + '?', 'Ej: Renault, Volkswagen, Peugeot').toLowerCase()
    seguro = prompt('¿que tipo de seguro?', '¿ejemplo: RC o Franquicia?').toLowerCase()
    tiempo = parseInt(prompt('¿Cuantos meses lo va a asegurar?', '*nota:La poliza aumenta x mes, por la inflacion'))

    if (seguro === 'rc') {
        seguro = 350
    }
    else if (seguro === 'franquicia') {
        seguro = 500
    }







    switch (auto) {
        case 'renault':
            precio = 5000

            break

        case 'volkswagen':
            precio = 9000
            break

        case 'peugeot':
            precio = 12000
            break
        default:
            alert('Ingrese las marcas seleccionadas!')
            precio = 0
            break
    }

    sumarSeguro(precio, seguro)
    alert('poliza del seguro: ' + subTotal)
    cuota(subTotal, inflacion)

    sumarInflacion(cuotaMes, inflacion)







    alert(tiempo + ' MESES DE COBERTURA, acontinuacion las cuotas mes a mes')

    for (let i = 1; i <= tiempo; i++) {
        let inflacion1 = inflacion * i
        let resultado = mesAmes * inflacion1

      
        alert('mes: ' + i + ' cuota de: ' + Math.round(resultado))
    }

    salir = confirm('¿quiero cotizar otro vehiculo?')
} while (salir);

alert('Muchas gracias por visitarnos ' + nombre)

