export let deleteProduct = (evt, p, selected_product) => {
    var path = evt.path || (evt.composedPath && evt.composedPath());
    path[2].style.color = "black"
    let product = path[1]

    product.style.color = "red"
    let decision = window.confirm("Do you want to delete this product?");

    if (decision) {
        for (let i = 0; i < p.getListLength(); i++) {
            if (p.getProduct(i).name == selected_product.name) {
                p.deleteProduct(i)
                product.remove()
                let sum = document.getElementById("SUM")
                sum.innerHTML = p.getFullSum()
            }
        }
    }
}

export let selectProduct = (evt, p, product_list) => {
    var path = evt.path || (evt.composedPath && evt.composedPath());
    let edit_form = document.getElementsByClassName("edit_product")[0]
    let product = path[1]
    console.log(product)
    console.log(edit_form.childNodes[1].childNodes)

    let product_list_by_tag = document.getElementsByClassName("product")

    if (p.selected) {
        edit_form.style.visibility = "hidden"
        product.style.color = "black"
        p.selected = false;
    } else {

        for (let index = 0; index < product_list_by_tag.length; index++) {
            const element = product_list_by_tag[index];
            edit_form.style.visibility = "hidden";
            element.style.color = "black";
            product_list.getProduct(index)._selected = false;
        }

        edit_form.childNodes[1].childNodes[1].value = p.name
        edit_form.childNodes[1].childNodes[3].value = p.amount
        edit_form.childNodes[1].childNodes[5].value = p.getPrice();
        edit_form.style.visibility = "visible"
        product.style.color = "red"
        p.selected = true;
    }
}

export default selectProduct;