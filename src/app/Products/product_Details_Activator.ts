import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { ProductService } from "./productService";
import { IProduct } from "./Product";


@Injectable()
export class ProductDetailsActivator implements CanActivate {
    constructor(private router: Router, private productService: ProductService) {

    }
    product:IProduct;
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.productService.getProduct(+route.params["id"]).subscribe(data=>this.product = data,error=>console.log(error));;
        if (!!(this.product)) {
            return !!(this.product);
        }
        this.router.navigate(["/404"]);
    }

}