import { Component,OnInit } from "@angular/core"
//import { IProduct, IBook } from "./Product"
import { IProduct, Product } from "./Product"
import { ProductService } from "./productService";
// import {HighlightDirective} from "./highlight.directive";
@Component({
    selector: "ap-products",
    moduleId:module.id,
    templateUrl: "product_list.component.html"
})
export class ProductListComponent implements OnInit {
    ngOnInit(): void {
        this.productService.getProducts().subscribe(data=>this.products = data,error=>console.log(error));
    }
    constructor(private productService:ProductService) {

    }
    pageTitle: string = "Products List";
    imageWidth: number = 100;
    imageHeight: number = 100;
    showImage: boolean = false;
    filterBy: string = "";
    products: IProduct[];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    

    OnRatingClicked(message:string):void{
        this.pageTitle = message;
    }

}