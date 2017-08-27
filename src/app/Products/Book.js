"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Book = (function () {
    function Book() {
        //private _initialPublishYear: number = 2004;
        //private _PublishYear: number = 2004;
        //private _Edition: number=1;
        this._initialPublishYear = 2004;
        this._PublishYear = 2004;
        this._Edition = 1;
        this._IsbnNumber = 0;
    }
    Object.defineProperty(Book.prototype, "Edition", {
        get: function () {
            return this._Edition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "ISBNNumber", {
        get: function () {
            return this._IsbnNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "PublishYear", {
        get: function () {
            return this._PublishYear;
        },
        set: function (Year) {
            this._PublishYear = Year;
            if (Year > this._initialPublishYear) {
                this._Edition = Year - this._initialPublishYear;
            }
        },
        enumerable: true,
        configurable: true
    });
    //SetIsbnNumber(isbn: number): void {
    //    this._IsbnNumber = isbn;
    //}
    //// Optional Parameter Example
    //SetIsbnNumber(isbn?: number): void {
    //    this._IsbnNumber = isbn;
    //}
    // Default Parameter Example
    Book.prototype.SetIsbnNumber = function (isbn) {
        if (isbn === void 0) { isbn = 2545; }
        this._IsbnNumber = isbn;
    };
    Book.prototype.Add = function (a, b, c) {
        if (c) {
            return (a + b + c);
        }
        return a + b;
    };
    Book.prototype.GetSomeData = function (a, b) {
        if (typeof (a) == "number" && !b) {
            return "First Overload Being executed" + a.toString();
        }
        else if (typeof (a) == "string" && typeof (b) == "number") {
            return "Second Overload is being executed " + a + " -- " + b.toString();
        }
        else {
            return "";
        }
    };
    return Book;
}());
exports.Book = Book;
var Book2 = (function (_super) {
    __extends(Book2, _super);
    function Book2() {
        return _super.call(this) || this;
        //this. = 2008;
    }
    return Book2;
}(Book));
Book2.Year = 2017;
exports.Book2 = Book2;
var Cities;
(function (Cities) {
    Cities[Cities["Pune"] = 1] = "Pune";
    Cities[Cities["Mumbai"] = 2] = "Mumbai";
    Cities[Cities["Chennai"] = 3] = "Chennai";
    Cities[Cities["Delhi"] = 4] = "Delhi";
})(Cities = exports.Cities || (exports.Cities = {}));
var AB_BookDetails = (function () {
    function AB_BookDetails() {
    }
    AB_BookDetails.prototype.getBookPublishYear = function () {
        return 2008;
    };
    return AB_BookDetails;
}());
exports.AB_BookDetails = AB_BookDetails;
var BookDetails = (function (_super) {
    __extends(BookDetails, _super);
    function BookDetails() {
        return _super.call(this) || this;
    }
    BookDetails.prototype.getBookName = function () {
        return "Some Book text";
    };
    BookDetails.prototype.getBookPrice = function () {
        return 2.53;
    };
    return BookDetails;
}(AB_BookDetails));
exports.BookDetails = BookDetails;
//# sourceMappingURL=Book.js.map