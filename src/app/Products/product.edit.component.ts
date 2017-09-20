import { Component, OnInit } from "@angular/core"
import { ProductService } from "../Index";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./Product";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    moduleId:module.id,
    templateUrl:"product.edit.component.html"
})
export class ProductEditComponent implements OnInit{
    constructor(private productService: ProductService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router) {
        // constructor(private productService: ProductService,private route:ActivatedRouteSnapshot) {
    }
    product:IProduct;
    editForm:FormGroup;
    ngOnInit(): void {
        this.editForm = this.fb.group({
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
        this.productService.getProduct(+this.route.snapshot.params["id"]).subscribe(data=>{
            this.product = data;
            this.editForm = this.fb.group({
                id:data.id,
                Name: data.Name,
                ProductId: data.ProductId,
                Price: data.Price,
                Discount: data.Discount,    
                Rating:data.Rating,
                Details:this.fb.group({
                    Description:data.Details.Description,
                    Catagory:data.Details.Catagory
                })
            });
        },error=>console.log(error));            
    }

    EditProduct():void{
        this.productService.UpdateProduct(this.editForm.value).subscribe(data=>{
            console.log(data);
            this.router.navigate(["/products"]);
        },error=>console.log(error));
    }

    Delete():void{
        this.productService.DeleteProduct(this.editForm.get("id").value).subscribe(data=>{
            console.log(data);
            this.router.navigate(["/products"]);
        },error=>console.log(error));
    }

    cancel():void{
        this.editForm.reset();
        this.router.navigate(["/products"]);
    }


}