import ProductList from './ProductList.js'
import Product from './Product.js'
import {selectProduct, deleteProduct, moveProduct} from './actions.js'

export default class View {
    constructor(product_list) {
        if (product_list instanceof ProductList) {
            this._product_list = product_list;
        } else throw new Error("Given object is not an instance of ProductList.");
        this._original_table = document.getElementById("product_table");
    }

    showTable() {
        let table = this._original_table;
        table.innerHTML = '';
        this.appendTableHeadings(table);
        for (let i = 0; i < this._product_list.getListLength(); i++) {
            let row = table.insertRow(-1);
            row.className="product"
            let product = this._product_list.getProduct(i);
            this.appendNewElement(row, i);
            this.appendNewElement(row, product.name);
            this.appendNewElement(row, product.amount);
            this.appendNewElement(row, product.price);
            this.appendNewElement(row, product.getSum());
            console.log(product)
            if(product.selected){
                row.style.color = "red"
            }else{
                row.style.color = "black"
            }
        }
    }

    appendTableHeadings(table) {
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

    appendNewElement(row, value) {
        if (typeof row === 'object') {
            let element = document.createElement("td");
            element.innerHTML = value;
            element.addEventListener("click",(evt) => selectProduct(evt,this._product_list.getProduct(parseInt(row.firstChild.innerHTML))))
            element.addEventListener("dblclick", (evt) => deleteProduct(evt,this._product_list.getProduct(parseInt(row.firstChild.innerHTML))))
            element.addEventListener("keypress", (evt) => moveProduct(evt,this._product_list.getProduct(parseInt(row.firstChild.innerHTML))))
            row.appendChild(element);
        }
    }
}