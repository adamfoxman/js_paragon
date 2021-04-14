export let deleteProduct  = (evt,p) =>{

    evt.path[2].style.color="black"

    let product = evt.path[1]
    product.style.color = "red"
    let decision = window.confirm("Do you want to delete this product?"); 

    if(decision){
        product.remove()
    }

}

export let selectProduct = (evt,p) =>{
    let product = evt.path[1]
    if(p.selected){
        product.style.color = "black"
        p.selected = false;
    }else{
        product.style.color = "red"
        p.selected = true;
    }
}

export let moveProduct = (evt, p) =>{

    console.log(evt)
    console.log(p)

}

export default selectProduct;