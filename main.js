import Product from './Product.js'
import ProductList from './ProductList.js'
import {selectProduct, deleteProduct, moveProduct} from './actions.js'

let table = document.getElementById("product_table");

function showTable(product_list, table) {
    table.innerHTML = '';
    appendTableHeadings(table);
    for (let i = 0; i < product_list.getListLength(); i++) {
        let row = table.insertRow(-1);
        row.className="product"
        let product = product_list.getProduct(i);
        appendNewElement(row, i);
        appendNewElement(row, product.name);
        appendNewElement(row, product.amount);
        appendNewElement(row, product.price);
        appendNewElement(row, product.getSum());
        console.log(product)
        if(product.selected){
            row.style.color = "red"
        }else{
            row.style.color = "black"
        }
    }

    console.log(product_list);

    document.getElementById("add_form").onsubmit = addProductToList;
    // document.getElementById("add_form").addEventListener("onsubmit", (event) => this.addProductToList(event, this._product_list));
}

function appendTableHeadings(table) {
    if (typeof table === 'object') {
        let headings = ["Lp.", "Nazwa", "Ilość", "Cena", "Suma"];
        var row = table.insertRow(-1);
        for (var i = 0; i < headings.length; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = headings[i];
            row.appendChild(headerCell);
        }
    }
}

function appendNewElement(row, value) {
    if (typeof row === 'object') {
        let element = document.createElement("td");
        element.innerHTML = value;
        element.addEventListener("click",(evt) => selectProduct(evt,product_list.getProduct(parseInt(row.firstChild.innerHTML))));
        element.addEventListener("dblclick", (evt) => deleteProduct(evt,product_list.getProduct(parseInt(row.firstChild.innerHTML))));
        element.addEventListener("keypress", (evt) => moveProduct(evt,product_list.getProduct(parseInt(row.firstChild.innerHTML))));
        row.appendChild(element);
    }
}

function addProductToList() {
    console.log(table);
    let n = document.getElementById("p_name");
    let a = document.getElementById("p_amount");
    let p = document.getElementById("p_price");
    let name = n.value;
    let amount = a.value;
    let price = p.value;

    if (name && amount && price) {
        let new_product = new Product(name, amount, price);
        product_list.addProduct(new_product);
        showTable(product_list, table);
    }
}

var first_product = new Product("Jabłko", 3, 2);
var second_product = new Product("Gruszka", 2, 5);
var third_product = new Product("Buty", 1, 350);

console.log("Utworzenie nowej listy z 2 produktami");
var product_list = new ProductList();
product_list.addProduct(first_product);
product_list.addProduct(second_product);
product_list.addProduct(third_product);

window.onkeydown = (event) =>{

    if(event.key=="ArrowDown"){
        for(let i=0; i<product_list.getListLength();i++){
            if(product_list.getProduct(i).selected){
                let id = i;
                if(id == product_list.getListLength()-1){
                    product_list.changeProductPosition(id,0)
                }else{
                    product_list.changeProductPosition(id,++id)
                }
                showTable(product_list, table);
                break;
            }
        }

    }else if(event.key == "ArrowUp"){
        for(let i=0; i<product_list.getListLength();i++){
            if(product_list.getProduct(i).selected){
                let id = i;
                console.log(id)
                if(id === 0){
                    product_list.changeProductPosition(id,product_list.getListLength()-1)
                }else{
                    product_list.changeProductPosition(id,--id)
                }
                showTable(product_list, table);
                break;
            }
        }
    }

}

showTable(product_list, table);