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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var router_1 = require("@angular/router");
var ProductService = (function () {
    function ProductService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = "http://localhost/MVCPract/";
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.baseUrl + "GetProducts").map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) { return error.json(); });
    };
    ProductService.prototype.getProduct = function (Id) {
        return this.http.get(this.baseUrl + "GetProduct/" + Id).map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) { return error.json(); });
    };
    ProductService.prototype.UpdateProduct = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        return this.http.put((this.baseUrl + "UpdateProduct?id=" + data.id), JSON.stringify(data), { headers: headers }).map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        }).catch(function (error) { return error.json(); });
    };
    ProductService.prototype.AddProduct = function (data) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        return this.http.post((this.baseUrl + "AddProduct"), JSON.stringify(data), { headers: headers }).map(function (response) {
            _this.router.navigate(["/products"]);
        }).catch(function (error) { return error.json(); });
    };
    ProductService.prototype.DeleteProduct = function (id) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        return this.http.delete((this.baseUrl + "DeleteProduct?id=" + id)).map(function (response) {
            var data = response.json();
            console.log(data);
            _this.router.navigate(["/products"]);
            return data;
        }).catch(function (error) { return error.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=productService.js.map