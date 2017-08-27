import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { ProductService } from "./productService";


@Injectable()
export class ProductDetailsActivator implements CanActivate {
    constructor(private router: Router, private productService: ProductService) {

    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let productExists = !!this.productService.getProduct(+route.params["id"]);
        if (!productExists) {
            this.router.navigate(["/404"]);
        }
        return productExists;
    }

}