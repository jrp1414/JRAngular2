import { IProduct } from "./Product";
import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    constructor(private http:Http){

    }
    getProducts(): Observable<IProduct[]> {
        let baseUrl = "api/products";
        return this.http.get(baseUrl).map((response:Response)=>{
            return <IProduct[]>response.json().data;
        }).catch(error=>error.json());
    }
    getProduct(Id:number): IProduct {
        return {
            id: 1,
            Name: "Chair",
            ProductId: "GDN-001",
            Price: 252.25,
            Discount: 10.25,
            Details: { Description: "Test", Catagory: "HouseHold" },
            Rating: 5
        };
    }
}
