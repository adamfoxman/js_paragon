import Product from './Product.js'
import ProductList from './ProductList.js'

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