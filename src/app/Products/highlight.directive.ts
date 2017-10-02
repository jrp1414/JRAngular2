import { Directive, Input, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: "[my-Highlight]"
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
        // el.nativeElement.style.backgroundColor = "yellow";
    }

    @HostListener("mouseenter") onMouseEnter(){
        this.Highlight("yellow");
    }

    @HostListener("mouseleave") onMouseLeave(){
        this.Highlight(null);
    }

    @Input("my-Highlight") HighlightColor:string;

    Highlight(color:any):void{
        this.el.nativeElement.style.backgroundColor=this.HighlightColor||color;
    }
}