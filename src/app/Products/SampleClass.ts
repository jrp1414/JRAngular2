export class SampleClass {
    TermsConditions: boolean = false;
    Id: number = 10;
    Name: string = "Ram";
    someNull: null;
    someUndef: undefined;
    Skills: string[] = ["C#", "ASP.Net", "SQL"];
    Cities: Array<string> = ["Pune", "Mumbai"];
    PrintMessage(): void {
        let a: [number, string] = [1, "Ram"];
        console.log(a[0]);
        console.log(a[1]);
        console.log(Colors.Green);

        let b: any = "dvbhbfv";
        console.log((b as string).length);
        console.log((<string>b).length);

        //var address: string = "Mumbai";
        //if (address == "Mumbai") {
        //    let age: number = 25;
        //}

        //const Pie: number = 3.14;
        //address = "Chennai";
        //age = 65;
        //Pie = 3.65; -- This we cannot do.


    }


}



enum Colors {
    Red = 1, Green, Blue
}



export interface IBook {
    Id: number;
    Name: string;
    Price: number;
    Rating?: number;
    //Rating: number;
    readonly Pie: number;
    Cities: ReadonlyArray<string>;
}

export interface IBook2 extends IBook {
    PrintHello(): void;
}

export class Book implements IBook {
    constructor() {
        this.Pie = 3.14;
        this.Cities = ["Pune", "Mumbai"];
    }
    Id: number;
    Name: string;
    Price: number;
    //Rating: number;
    //Price = 3.2566;
    readonly Pie: number;
    Cities: ReadonlyArray<string>;

    SomeMethod(): void {
        //this.Pie = 3.652;
        //this.Cities.push("njdjv");
        //this.Cities[6] = "Chennai";
    }

}

export class Book2 implements IBook2 {
    Id: number;
    Name: string;
    Price: number;
    //Rating: number;
    //Price = 3.2566;
    readonly Pie: number;
    Cities: ReadonlyArray<string>;
    PrintHello(): void {

    }

}


enum RandomNumbers {
    A = 1,
    B = A * 2,
    C = B * 2
}