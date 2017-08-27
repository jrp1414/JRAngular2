export class Book {
    constructor() {

    }

    BookId: number;
    //private _initialPublishYear: number = 2004;
    //private _PublishYear: number = 2004;
    //private _Edition: number=1;

    protected _initialPublishYear: number = 2004;
    protected _PublishYear: number = 2004;
    protected _Edition: number = 1;
    private _IsbnNumber: number = 0;

    get Edition(): number {
        return this._Edition;
    }

    get ISBNNumber(): number {
        return this._IsbnNumber;
    }

    get PublishYear(): number {
        return this._PublishYear;
    }
    set PublishYear(Year: number) {
        this._PublishYear = Year;
        if (Year > this._initialPublishYear) {
            this._Edition = Year - this._initialPublishYear;
        }
    }

    //SetIsbnNumber(isbn: number): void {
    //    this._IsbnNumber = isbn;
    //}

    //// Optional Parameter Example
    //SetIsbnNumber(isbn?: number): void {
    //    this._IsbnNumber = isbn;
    //}

    // Default Parameter Example
    SetIsbnNumber(isbn: number = 2545): void {
        this._IsbnNumber = isbn;
    }


    Add(x: number, y: number): number;
    Add(x: number, y: number, z: number): number;

    Add(a: any, b: any, c?: any): any {
        if (c) {
            return (a + b + c);
        }
        return a + b;
    }

    GetSomeData(someNum: number): string;
    GetSomeData(someStr: string, someNum: number): string;

    GetSomeData(a: any, b?: any): any {
        if (typeof (a) == "number" && !b) {
            return "First Overload Being executed" + a.toString();
        } else if (typeof (a) == "string" && typeof (b) == "number") {
            return "Second Overload is being executed " + a + " -- " + b.toString();
        } else {
            return "";
        }
    }
}


export class Book2 extends Book {
    constructor() {
        super();
        //this. = 2008;
    }
    BookName: string;

    static Year: number = 2017;

}

export enum Cities {
    Pune = 1,
    Mumbai,
    Chennai,
    Delhi
}

export abstract class AB_BookDetails {
    protected abstract getBookName(): string;
    abstract getBookPrice(): number;
    getBookPublishYear(): number {
        return 2008;
    }
}

export class BookDetails extends AB_BookDetails {
    constructor() {
        super();
    }

    protected getBookName(): string {
        return "Some Book text";
    }

    getBookPrice(): number {
        return 2.53;
    }

}
