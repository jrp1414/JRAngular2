"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var productService_1 = require("./productService");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        // constructor(private productService: ProductService,private route:ActivatedRouteSnapshot) {
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.product = this.productService.getProduct(+this.route.snapshot.params["id"]);
        // this.product = this.productService.getProduct(+this.route.params["id"]);
    };
    ProductDetailsComponent.prototype.getPriceClass = function () {
        if (this.product.Price > 4000) {
            // return {red:"red",bold:"bold"};
            // return "red bold";
            return ["red", "bold"];
        }
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: "ap-product",
        moduleId: module.id,
        templateUrl: "product_details.component.html",
        styles: [".red{color:red}", ".bold{\n        font-weight:bold\n    }"]
    }),
    __metadata("design:paramtypes", [productService_1.ProductService, router_1.ActivatedRoute])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product_details.component.js.map