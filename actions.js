export let deleteProduct = (evt, p,selected_product) => {

    evt.path[2].style.color = "black"
    let product = evt.path[1]
   
    product.style.color = "red"
    let decision = window.confirm("Do you want to delete this product?");

    if (decision) {
        for(let i=0; i<p.getListLength();i++){
            if(p.getProduct(i).name==selected_product.name){
                p.deleteProduct(i)
                product.remove()
                let sum = document.getElementById("SUM")
                sum.innerHTML = p.getFullSum()
            }
        }
    }
}

export let selectProduct = (evt, p) => {
    let edit_form = document.getElementsByClassName("edit_product")[0]
    let product = evt.path[1]
    console.log(product)
    console.log(edit_form.childNodes[1].childNodes)
    if (p.selected) {
        edit_form.style.visibility="hidden"
        product.style.color = "black"
        p.selected = false;
    } else {
        edit_form.childNodes[1].childNodes[1].value = p.name
        edit_form.childNodes[1].childNodes[3].value = p.amount
        edit_form.childNodes[1].childNodes[5].value = p.amount
        edit_form.style.visibility="visible"
        product.style.color = "red"
        p.selected = true;
    }
}


export default selectProduct;