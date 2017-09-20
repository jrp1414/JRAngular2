import { Component, OnInit } from "@angular/core"
import { ProductService } from "../Index";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./Product";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "ap-createProduct",
    moduleId: module.id,
    templateUrl: "create_Product.component.html"
})
export class CreateProductComponent {
    isDirty: boolean = true;
    constructor(private productService: ProductService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router) {
        // constructor(private productService: ProductService,private route:ActivatedRouteSnapshot) {
    }
    product:IProduct;
    addForm:FormGroup;
    ngOnInit(): void {
        this.addForm = this.fb.group({
            id:0,
            Name: "",
            ProductId: "",
            Price: 0,
            Discount: 0,    
            Rating:0,
            Details:this.fb.group({
                Description:"",
                Catagory:""
            })
        });        
    }

    AddProduct():void{
        this.productService.AddProduct(this.addForm.value).subscribe(data=>{
            console.log(data);
            this.router.navigate(["/products"]);
        },error=>console.log(error));
    }

    cancel():void{
        this.addForm.reset();
        this.router.navigate(["/products"]);
    }
}