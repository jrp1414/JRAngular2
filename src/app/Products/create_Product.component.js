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
var CreateProductComponent = (function () {
    function CreateProductComponent(productService, route, fb, router) {
        this.productService = productService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.isDirty = true;
        // constructor(private productService: ProductService,private route:ActivatedRouteSnapshot) {
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        this.addForm = this.fb.group({
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
    };
    CreateProductComponent.prototype.AddProduct = function () {
        var _this = this;
        this.productService.AddProduct(this.addForm.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(["/products"]);
        }, function (error) { return console.log(error); });
    };
    CreateProductComponent.prototype.cancel = function () {
        this.addForm.reset();
        this.router.navigate(["/products"]);
    };
    return CreateProductComponent;
}());
CreateProductComponent = __decorate([
    core_1.Component({
        selector: "ap-createProduct",
        moduleId: module.id,
        templateUrl: "create_Product.component.html"
    }),
    __metadata("design:paramtypes", [Index_1.ProductService, router_1.ActivatedRoute, forms_1.FormBuilder, router_1.Router])
], CreateProductComponent);
exports.CreateProductComponent = CreateProductComponent;
//# sourceMappingURL=create_Product.component.js.map