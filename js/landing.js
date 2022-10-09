

comprar = (id) => {
    var ele = document.querySelector(`#${id}`);
    if(ele.className === "btn btn-primary") {
        ele.className = "btn btn-secondary";
    } else {
        ele.className = "btn btn-primary";
    }
};

mostraDetalles = (id) => {

    clearElement('fotoProducto')
    clearElement('descProducto')

    var ele = document.querySelector(`#${id}`)
    const fotoProducto = document.getElementById('fotoProducto')
    const descProducto = document.getElementById('descProducto')
    const fotoProd = document.getElementById(`img${id}`)
    const descProd = document.getElementById(`d${id}`)
    //descProducto.className = 'prodDetalle'
    //fotoProducto.append(fotoProd)
    fotoProducto.innerHTML += fotoProd.outerHTML
    //descProducto.append(descProd.innerHTML)
    descProducto.innerHTML += descProd.innerText
    modalBody.addEventListener('shown.bs.modal', () => {
        prod.focus()
    })
}

clearElement = (id) => {

        var e = document.getElementById(id);
        //e.firstElementChild can be used.
        if(e != 'undefined')
        {
            var child = e.lastElementChild; 
            while (child) {
                e.removeChild(child);
                child = e.lastElementChild;
            }
        }
    }
