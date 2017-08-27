import { Component,OnInit } from "@angular/core"
//import { IProduct, IBook } from "./Product"
import { IProduct, Product } from "./Product"
import { ProductService } from "./productService";
@Component({
    selector: "ap-products",
    moduleId:module.id,
    templateUrl: "product_list.component.html"
})
export class ProductListComponent implements OnInit {
    ngOnInit(): void {
        this.products = this.productService.getProducts();
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


// products: Product[] = [
    //     new Product("Mouse", "GDN-001", 253652.02, "http://viralinfocom.com/wp-content/uploads/2016/08/944242-mouse.jpg", 10.5,4),
    //     new Product("Keyboard", "GDN-002", 4256.02, "https://codekeyboards.com/galleria/9.jpg", 5.75,2.5),
    //     new Product("Monitor", "GDN-003", 222.02,"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5029/5029800_sd.jpg;maxHeight=550;maxWidth=642",18.25,4.5),
    //     new Product("Printer", "GDN-004", 7585.02,"http://store.hp.com/wcsstore/hpusstore/Treatment/dsnew-printers-drawer-1-3.jpg",12.75,3.5)
    // ];