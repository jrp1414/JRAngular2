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
var ProductDetailsActivator = (function () {
    function ProductDetailsActivator(router, productService) {
        this.router = router;
        this.productService = productService;
    }
    ProductDetailsActivator.prototype.canActivate = function (route) {
        var _this = this;
        this.productService.getProduct(+route.params["id"]).subscribe(function (data) { return _this.product = data; }, function (error) { return console.log(error); });
        ;
        if (!!(this.product)) {
            return !!(this.product);
        }
        this.router.navigate(["/404"]);
    };
    return ProductDetailsActivator;
}());
ProductDetailsActivator = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, productService_1.ProductService])
], ProductDetailsActivator);
exports.ProductDetailsActivator = ProductDetailsActivator;
//# sourceMappingURL=product_Details_Activator.js.map