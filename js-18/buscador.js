//const resultado = document.querySelector('#resultado')
const resultado = document.getElementById('resultado')
//el fin de usar queryselector es el mismo que el de usar getelementbyid
const formulario = document.querySelector('#formulario')

const filtrar = () =>{
    //definimos el resultado vacio por si no encontramos nada
    resultado.innerHTML = ''
    //ponemos en minuscula lo que viene del html
    const texto = formulario.value.toLowerCase()

    //recorremos el arreglo declarado en catalogo
    //javascript tiene las variables definidas en otro script para todos los scripts que definamos
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase()
        //con el indexof buscamos si lo del input esta en nuestro catalogo
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="card" style="width: 18rem;" id="resultado">
                <img src="${producto.imagen}" alt="Imagen Random">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                    <h5 class="card-title">Destino: ${producto.destino}</h5>
                    <p class="card-text">Valor: ${producto.valor}</p>
                </div>
            </div>
            `
        }
    }
    // si no encontramos nada entonces resultado es igual a ''
    if(resultado.innerHTML === ''){
        resultado.innerHTML = `
            <li>Producto no encontrado</li>
        `
    }
}
// agregamos un escuchador de eventos para cuando suelten la tecla, cada vez que el usuario suelta una tecla se llama a la funcion filtrar
formulario.addEventListener('keyup', filtrar)