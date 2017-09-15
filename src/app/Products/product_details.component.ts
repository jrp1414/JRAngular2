import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,ActivatedRouteSnapshot } from "@angular/router"
import { IProduct } from "./Product"
import { ProductService } from "./productService";

@Component({
    selector: "ap-product",
    moduleId: module.id,
    templateUrl: "product_details.component.html",
    styles: [`.red{color:red}`, `.bold{
        font-weight:bold
    }`]

})
export class ProductDetailsComponent implements OnInit {
    constructor(private productService: ProductService,private route:ActivatedRoute) {
        // constructor(private productService: ProductService,private route:ActivatedRouteSnapshot) {
    }
    ngOnInit(): void {
        this.productService.getProduct(+this.route.snapshot.params["id"]).subscribe(data=>this.product = data,error=>console.log(error));
        // this.product = this.productService.getProduct(+this.route.params["id"]);
    }
    product: IProduct;
    getPriceClass():any{
        if(this.product && this.product.Price>4000){
            // return {red:"red",bold:"bold"};
            // return "red bold";
            return ["red","bold"];
        }
        return [];
    }
}