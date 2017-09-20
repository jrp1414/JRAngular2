import { IProduct } from "./Product";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions,Headers } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Injectable()
export class ProductService {
    constructor(private http:Http,private router:Router){

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

    UpdateProduct(data:IProduct): Observable<IProduct> {
        let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({ headers: headers });
        
        return this.http.put((this.baseUrl+"UpdateProduct?id="+data.id),JSON.stringify(data),{headers:headers}).map((response:Response)=>{
            let data = <any>response.json();
            console.log(data);
            return data;
          }).catch(error=>error.json());
    }

    AddProduct(data:IProduct): Observable<IProduct> {
        let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({ headers: headers });
        
        return this.http.post((this.baseUrl+"AddProduct"),JSON.stringify(data),{headers:headers}).map((response:Response)=>{
            this.router.navigate(["/products"]);
          }).catch(error=>error.json());
    }

    DeleteProduct(id:number): Observable<IProduct> {
        let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({ headers: headers });
        
        return this.http.delete((this.baseUrl+"DeleteProduct?id="+id)).map((response:Response)=>{
            let data = <any>response.json();
            console.log(data);
            this.router.navigate(["/products"]);
            return data;
          }).catch(error=>error.json());
    }
}
