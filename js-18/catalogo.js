const productos = [
    {
        nombre: 'Mesa',
        destino: 'Comedor',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        valor: 500
    },
    { 
        nombre: 'Escritorio',
        destino: 'Oficina', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Lavarropas', 
        destino: 'Lavadero', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 600 
    }, 
    { 
        nombre: 'Televisor', 
        destino: 'Living', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Silla', 
        destino: 'Living', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Sofá', 
        destino: 'Living', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Termo', 
        destino: 'Cocina', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Estufa', 
        destino: 'Multiuso', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Rollo de cocina', 
        destino: 'Cocina', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Celular', 
        destino: 'Bolsillo', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Billetera', 
        destino: 'Bolsillo', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Reloj', 
        destino: 'Brazo', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Pulsera', 
        destino: 'Brazo', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Brazalette', 
        destino: 'Brazo', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Puerta', 
        destino: 'Multiuso', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Computadoras Escritorio', 
        destino: 'Multilugar', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Computadoras Portátiles', 
        destino: 'Multilugar', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Bicicletas', 
        destino: 'Garage', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Lapicera', 
        destino: 'Multilugar', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
    { 
        nombre: 'Anteojos', 
        destino: 'Escritorio', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    },
    { 
        nombre: 'Pantalones', 
        destino: 'Armario', 
        imagen: 'https://dummyimage.com/300x200/000/fff', 
        valor: 500 
    }, 
]
// Hacemos contacto mediante el metodo de JS getElementById
let product = document.getElementById("resultado")
// Declaramos una arrow function o tambien conocida como funcion flecha
const catalogo = () => {

    // Las comillas invertidas se llaman backtiks o tambien conocidas como template string o string literal, dentro de estas mismas podemos introducir de manera dinamica codigo HTML5 dentro de JS
    // Usamos un FOR OF
    for(let producto of productos){
        // product era la variable que usamos para conectarnos al html
        product.innerHTML += 
        `
        <div class="card" style="width: 18rem;" id="resultado">
            <img src="${producto.imagen}" alt="Imagen Random">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                <h5 class="card-title">Destino: ${producto.destino}</h5>
                <p class="card-text">Valor: ${producto.valor}</p>
            </div>
        </div>
        `
        // las variables producto.XXXXX corresponden al producto declarado en el FOR, es nuestra variable de iteracion
    }
}
// llamado a la funcion declarada arriba
catalogo()

// FUNCION AGREGADA POR MI, otra manera de recorrer el arreglo usando FOR IN
// function recorrerArreglo(arreglo){
//     for(indice in arreglo){
//         console.log(arreglo[indice], " prueba ")
//         product.innerHTML += 
//         `
//         <div class="card" style="width: 18rem;" id="resultado">
//             <img src="${arreglo[indice].imagen}" alt="Imagen Random">
//             <div class="card-body">
//                 <h5 class="card-title">Nombre: ${arreglo[indice].nombre}</h5>
//                 <h5 class="card-title">Destino: ${arreglo[indice].destino}</h5>
//                 <p class="card-text">Valor: ${arreglo[indice].valor}</p>
//             </div>
//         </div>
//         `
//     }
// }

// recorrerArreglo(productos)