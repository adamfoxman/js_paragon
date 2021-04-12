export default class Product {
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