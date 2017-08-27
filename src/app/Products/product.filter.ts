import {Pipe,PipeTransform} from "@angular/core"
import {Product} from "./Product"

@Pipe({
    name:"ProductFilter"
})
export class ProductFilterPipe implements PipeTransform{
    transform(value: Product[], filterBy:string) {
        filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy? value.filter((p:Product)=>p.Name.toLocaleLowerCase().indexOf(filterBy)!= -1):value;
    }

}