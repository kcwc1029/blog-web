const products = [];

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // 新增(整個物件放入products)
    save() {
        products.push(this);
    }
    // 刪除(傳入name，並依據name刪除)
    static delete(name) {
        const index = products.findIndex((p) => p.name === name);
        if (index !== -1) products.splice(index, 1);
    }
    static fetchAll() {
        return products;
    }
}

module.exports = Product;
