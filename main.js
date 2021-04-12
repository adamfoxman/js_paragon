// import Product from './Product'
// import ProductList from './ProductList'

class Product {
    constructor(name, amount, price) {
        this._name = name;
        this._amount = amount;
        this._price = price;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else throw new Error("Given name is not a string.")
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value === 'number') {
            if (value > 0) {
                this._amount = value;
            } else throw new Error("Product amount cannot be 0 or negative.");
        } else throw new Error("Given value is not a number.")
    }

    get price() {
        return this._price <= 0 ? "0 zł" : this._price + ' zł';
    }

    set price(value) {
        if (typeof value === 'number') {
            if (value > 0) {
                this._price = value;
            } else throw new Error("Price cannot be 0 or negative.")
        } else throw new Error("Given value is not a number.")
    }

    getSum() {
        return (this._amount * this._price) + ' zł'; 
    }
}

class ProductList {
    constructor() {
        this._product_list = [];
    }

    getProduct(id) {
        if (typeof id === 'number') {
            return this._product_list[id];
        } else throw new Error("Given ID is not a number.");
    }

    setProduct(id, product) {
        if (typeof id === 'number') {
            if (product instanceof Product) {
                this._product_list[id] = product;
            } else throw new Error("Given object is not a Product.");
        } else throw new Error("Given ID is not a number.");
    }

    addProduct(product) {
        if (product instanceof Product) {
            this._product_list.push(product);
        } else throw new Error("Given object is not a Product.");
    }

    deleteProduct(id) {
        if (typeof id === 'number') {
            this._product_list.splice(id, 1);
        } else throw new Error("Given ID is not a number.");
    }

    changeProductPosition(id, new_position) {
        if (typeof id === 'number' && typeof new_position === 'number') {
            let temp = this._product_list[id];
            this._product_list[id] = this._product_list[new_position];
            this._product_list[new_position] = temp;    
        } else throw new Error("At least one given ID is not a number.");
    }

    getListLength() {
        return this._product_list.length;
    }

    display() {
        this._product_list.forEach(element => {
            console.log(element.name + " w ilości " + element.amount + " w cenie " + element.price + " za sztukę. Cena za całość: " + element.getSum());
        });
    }
}

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