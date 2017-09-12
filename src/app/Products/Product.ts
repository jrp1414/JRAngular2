export interface IProduct{
    id:number;
    Name: string;
    ProductId: string;
    Price: number;
    // ImageUrl: string;
    Discount: number;    
    Rating:number;
    Details:{};
    //GetDiscountedPrice(Price: number, Discount: number): number;
}

//export interface IBook {

//}


export class Product implements IProduct {
    Details: {};
    constructor(Name: string, ProductId: string, Price: number, ImageUrl: string, Discount: number, Rating: number) {
        this.Name = Name;
        this.ProductId = ProductId;
        this.Price = Price;
        this.Discount = Discount;
        this.Rating = Rating;
        this.ImageUrl = ImageUrl;
    }
    id:number;
    Name: string;
    ProductId: string;
    Price: number;
    ImageUrl: string;
    Discount: number;
    Rating:number;
    GetDiscountedPrice(Price: number, Discount: number): number {
        return  Price - ((Price * Discount) / 100);
    }


}

//export class ChildProduct extends Product {
//    constructor() {
        
//    }
//}