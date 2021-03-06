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
var productService_1 = require("./productService");
// import {HighlightDirective} from "./highlight.directive";
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = "Products List";
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.showImage = false;
        this.filterBy = "";
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) { return _this.products = data; }, function (error) { return console.log(error); });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.OnRatingClicked = function (message) {
        this.pageTitle = message;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: "ap-products",
        moduleId: module.id,
        templateUrl: "product_list.component.html"
    }),
    __metadata("design:paramtypes", [productService_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product_list.component.js.map