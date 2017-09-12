"use strict";
var ProductDB = (function () {
    function ProductDB() {
    }
    ProductDB.prototype.createDb = function () {
        var products = [
            {
                id: 1,
                Name: "Chair",
                ProductId: "GDN-001",
                Price: 252.25,
                Discount: 10.25,
                Details: { Description: "Test", Catagory: "HouseHold" },
                Rating: 5
            },
            {
                id: 2,
                Name: "Bed",
                ProductId: "GDN-002",
                Price: 3252.25,
                Discount: 10.25,
                Details: { Description: "Bed", Catagory: "HouseHold" },
                Rating: 4
            },
            {
                id: 3,
                Name: "Table",
                ProductId: "GDN-003",
                Price: 1252.25,
                Discount: 10.25,
                Details: { Description: "Table", Catagory: "HouseHold" },
                Rating: 5
            },
            {
                id: 4,
                Name: "TV Stand",
                ProductId: "GDN-004",
                Price: 2452.25,
                Discount: 10.25,
                Details: { Description: "TV Stand", Catagory: "HouseHold" },
                Rating: 5
            },
            {
                id: 5,
                Name: "Sofa",
                ProductId: "GDN-005",
                Price: 10552.25,
                Discount: 10.25,
                Details: { Description: "Sofa", Catagory: "HouseHold" },
                Rating: 5
            },
            {
                id: 6,
                Name: "Cup Board",
                ProductId: "GDN-006",
                Price: 4552.25,
                Discount: 10.25,
                Details: { Description: "Cup board", Catagory: "HouseHold" },
                Rating: 5
            },
            {
                id: 7,
                Name: "Fridge",
                ProductId: "GDN-007",
                Price: 5752.25,
                Discount: 10.25,
                Details: { Description: "Fridge", Catagory: "Kitchen Appliances" },
                Rating: 5
            }
        ];
        return { products: products };
    };
    return ProductDB;
}());
exports.ProductDB = ProductDB;
//# sourceMappingURL=ProductDB.js.map