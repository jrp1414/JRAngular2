import { Component } from "@angular/core"
import { Router } from "@angular/router";


@Component({
    selector: "ap-createProduct",
    moduleId: module.id,
    templateUrl: "create_Product.component.html"
})
export class CreateProductComponent {
    isDirty: boolean = true;
    constructor(private route: Router) {
    }

    CreateProduct(createProductValues:any): void {
        console.log(createProductValues);
    }
    Cancel(): void {
        this.route.navigate(["/products"]);
    }
}