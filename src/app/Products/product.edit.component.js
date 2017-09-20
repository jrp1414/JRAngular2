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
var Index_1 = require("../Index");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ProductEditComponent = (function () {
    function ProductEditComponent(productService, route, fb, router) {
        this.productService = productService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        // constructor(private productService: ProductService,private route:ActivatedRouteSnapshot) {
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.fb.group({
            id: 0,
            Name: "",
            ProductId: "",
            Price: 0,
            Discount: 0,
            Rating: 0,
            Details: this.fb.group({
                Description: "",
                Catagory: ""
            })
        });
        this.productService.getProduct(+this.route.snapshot.params["id"]).subscribe(function (data) {
            _this.product = data;
            _this.editForm = _this.fb.group({
                id: data.id,
                Name: data.Name,
                ProductId: data.ProductId,
                Price: data.Price,
                Discount: data.Discount,
                Rating: data.Rating,
                Details: _this.fb.group({
                    Description: data.Details.Description,
                    Catagory: data.Details.Catagory
                })
            });
        }, function (error) { return console.log(error); });
    };
    ProductEditComponent.prototype.EditProduct = function () {
        var _this = this;
        this.productService.UpdateProduct(this.editForm.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/products"]);
        }, function (error) { return console.log(error); });
    };
    ProductEditComponent.prototype.Delete = function () {
        var _this = this;
        this.productService.DeleteProduct(this.editForm.get("id").value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/products"]);
        }, function (error) { return console.log(error); });
    };
    ProductEditComponent.prototype.cancel = function () {
        this.editForm.reset();
        this.router.navigate(["/products"]);
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "product.edit.component.html"
    }),
    __metadata("design:paramtypes", [Index_1.ProductService, router_1.ActivatedRoute, forms_1.FormBuilder, router_1.Router])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product.edit.component.js.map