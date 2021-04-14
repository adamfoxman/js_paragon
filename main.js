import Product from './Product.js'
import ProductList from './ProductList.js'
import View from './View.js';

var first_product = new Product("Jabłko", 3, 2);
var second_product = new Product("Gruszka", 2, 5);

console.log(first_product.amount);
console.log(second_product.price);

// first_product.amount = -1;
first_product.amount = 6;
console.log(first_product.amount);
console.log(first_product.price);
console.log(first_product.getSum());

first_product.name = 'śliwka';
console.log(first_product.name);

console.log("Utworzenie nowej listy z 2 produktami");
var product_list = new ProductList();

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
                view.showTable()
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
                view.showTable()
                break;
            }
        }
    }

}

product_list.addProduct(first_product);
product_list.addProduct(second_product);
product_list.display();

console.log("Zamiana miejsami produktów na liście");
product_list.changeProductPosition(0, 1);
product_list.display();

console.log("Wpisanie nowego produktu na miejsce o id 1");
var new_product = new Product("baton", 1, 2.5);
product_list.setProduct(1, new_product);
product_list.display();

console.log("dodanie nowego produktu");
product_list.addProduct(second_product);
product_list.display();

console.log("usuniecie produktu nr 2");
product_list.deleteProduct(0);
product_list.display()

let view = new View(product_list);
view.showTable();

product_list.addProduct(new Product("Buty", 1, 350));
view.showTable();