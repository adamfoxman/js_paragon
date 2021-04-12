import ProductList from './ProductList.js'
import Product from './Product.js'

export default class View {
    constructor(product_list) {
        this._product_list = product_list;
    }

    showTable() {
        let table = document.getElementById("product_table");
        let template = table.querySelector("tr");
        this.appendTableHeadings(table);

        let length = this._product_list.getListLength();
        for (let i = 0; i < length; i++) {
            let product = this._product_list.getProduct(i);
            let product_on_list = template.cloneNode(true);
            product_on_list.hidden = false;
            product_on_list.querySelector(".product_id").innerHTML = 1;
            product_on_list.querySelector(".product_name").innerHTML = product.name;
            product_on_list.querySelector(".product_amount").innerHTML = product.amount;
            product_on_list.querySelector(".product_price").innerHTML = product.price;
            product_on_list.querySelector(".product_sum").innerHTML = product.getSum();
            table.appendChild(product_on_list);
        }
    }

    appendTableHeadings(table) {
        if (typeof table === 'object') {
            let headings = ["Lp.", "Nazwa", "Ilość", "Cena", "Suma"];
            var row = table.insertRow(-1);
            for (var i = 0; i < 5; i++) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = headings[i];
                row.appendChild(headerCell);
            }
        }
    }
}