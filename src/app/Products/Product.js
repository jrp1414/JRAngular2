"use strict";
//export interface IBook {
//}
var Product = (function () {
    function Product(Name, ProductId, Price, ImageUrl, Discount, Rating) {
        this.Name = Name;
        this.ProductId = ProductId;
        this.Price = Price;
        this.Discount = Discount;
        this.Rating = Rating;
        this.ImageUrl = ImageUrl;
    }
    Product.prototype.GetDiscountedPrice = function (Price, Discount) {
        return Price - ((Price * Discount) / 100);
    };
    return Product;
}());
exports.Product = Product;
//export class ChildProduct extends Product {
//    constructor() {
//    }
//} 
//# sourceMappingURL=Product.js.map