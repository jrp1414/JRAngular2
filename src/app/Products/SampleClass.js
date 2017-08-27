"use strict";
var SampleClass = (function () {
    function SampleClass() {
        this.TermsConditions = false;
        this.Id = 10;
        this.Name = "Ram";
        this.Skills = ["C#", "ASP.Net", "SQL"];
        this.Cities = ["Pune", "Mumbai"];
    }
    SampleClass.prototype.PrintMessage = function () {
        var a = [1, "Ram"];
        console.log(a[0]);
        console.log(a[1]);
        console.log(Colors.Green);
        var b = "dvbhbfv";
        console.log(b.length);
        console.log(b.length);
        //var address: string = "Mumbai";
        //if (address == "Mumbai") {
        //    let age: number = 25;
        //}
        //const Pie: number = 3.14;
        //address = "Chennai";
        //age = 65;
        //Pie = 3.65; -- This we cannot do.
    };
    return SampleClass;
}());
exports.SampleClass = SampleClass;
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var Book = (function () {
    function Book() {
        this.Pie = 3.14;
        this.Cities = ["Pune", "Mumbai"];
    }
    Book.prototype.SomeMethod = function () {
        //this.Pie = 3.652;
        //this.Cities.push("njdjv");
        //this.Cities[6] = "Chennai";
    };
    return Book;
}());
exports.Book = Book;
var Book2 = (function () {
    function Book2() {
    }
    Book2.prototype.PrintHello = function () {
    };
    return Book2;
}());
exports.Book2 = Book2;
var RandomNumbers;
(function (RandomNumbers) {
    RandomNumbers[RandomNumbers["A"] = 1] = "A";
    RandomNumbers[RandomNumbers["B"] = 2] = "B";
    RandomNumbers[RandomNumbers["C"] = 4] = "C";
})(RandomNumbers || (RandomNumbers = {}));
//# sourceMappingURL=SampleClass.js.map