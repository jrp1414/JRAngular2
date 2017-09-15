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
    baseUrl:string = "http://localhost/MVCPract/";
    getProducts(): Observable<IProduct[]> {
        return this.http.get(this.baseUrl+"GetProducts").map((response:Response)=>{
          let data = <IProduct[]>response.json();
          console.log(data);
          return data;
        }).catch(error=>error.json());
    }
    getProduct(Id:number): Observable<IProduct> {
        return this.http.get(this.baseUrl+"GetProduct/"+Id).map((response:Response)=>{
            let data = <IProduct>response.json();
            console.log(data);
            return data;
          }).catch(error=>error.json());
    }
}
