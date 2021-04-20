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
                localStorage.setItem("list",JSON.stringify(this));
            } else throw new Error("Given object is not a Product.");
        } else throw new Error("Given ID is not a number.");
    }

    addProduct(product) {
        if (product instanceof Product) {
            this._product_list.push(product);
            localStorage.setItem("list",JSON.stringify(this));
        } else throw new Error("Given object is not a Product.");
    }

    deleteProduct(id) {
        if (typeof id === 'number') {
            this._product_list.splice(id, 1);
            localStorage.setItem("list",JSON.stringify(this));
        } else throw new Error("Given ID is not a number.");
    }

    changeProductPosition(id, new_position) {
        console.log(id,new_position)
        if (typeof id === 'number' && typeof new_position === 'number') {
            let temp = this._product_list[id];
            this._product_list[id] = this._product_list[new_position];
            this._product_list[new_position] = temp;
            localStorage.setItem("list",JSON.stringify(this));    
        } else throw new Error("At least one given ID is not a number.");
    }

    getListLength() {
        return this._product_list.length;
    }

    getFullSum(){
        let sum = 0;
        this._product_list.forEach(p => sum+=p.getSumValue());
        return sum.toFixed(2) + ' zł';
    }

    display() {
        this._product_list.forEach(element => {
            console.log(element.name + " w ilości " + element.amount + " w cenie " + element.price + " za sztukę. Cena za całość: " + element.getSum());
        });
    }

    fromJSON(jsonObject) {
        jsonObject._product_list.forEach(p => this._product_list.push(new Product(p._name, p._amount, p._price)));
    }
}