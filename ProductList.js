import Product from "./Product.js"

export default class ProductList {
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