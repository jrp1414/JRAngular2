import { Component, OnChanges, SimpleChanges, Input,Output,EventEmitter } from "@angular/core"

@Component({
    selector:"ap-star",
    moduleId:module.id,
    templateUrl:"star.component.html",
    styleUrls:["star.component.css"]
})
export class StarComponent implements OnChanges{
    ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;    
    }
    
    @Input() rating: number = 4;
    starWidth:number=86;

    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

    onClick():void {
        this.ratingClicked.emit("Rating "+ this.rating+ "is clicked");
    }
}