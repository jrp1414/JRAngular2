import { Component } from "@angular/core"
import { Book, Cities, Book2 } from "./Book"

@Component({
selector:"ap-book",
moduleId:module.id,
templateUrl:"Book.component.html"
})
export class BookComponent{
    constructor() {
        this.book.BookId = 1;
        this.book.PublishYear = 2002;
        //this.book.SetIsbnNumber(524526);
        //this.book.Edition = 6;
        this.book.SetIsbnNumber();
        this.book.Add(10, 11, 12);
        console.log(this.book.Add(10, 11, 12));
        console.log(this.book.Add(10, 12));

        console.log(this.book.GetSomeData("Ram", 25));
        console.log(this.book.GetSomeData(25));
    }
    
    year: number = Book2.Year;
    book: Book2 = new Book2();
    Cities: any[] = [
        { Name: Cities[Cities.Pune], Value: Cities.Pune}, Cities[Cities.Mumbai], Cities[Cities.Chennai], Cities[Cities.Delhi]
    ];

}

