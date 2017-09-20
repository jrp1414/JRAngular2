import { Component, Input } from "@angular/core"

@Component({
    selector: "collapsable-well",
    template: `
    <div class='well'>
    <h2 (click)='toggleContent()'>{{title}}</h2>
    <ng-content *ngIf='visible'></ng-content>
    </div>
    `
})
export class CollapsableComponent {
    @Input() title: string;
    visible: boolean = false;
    toggleContent(): void {
        this.visible= !this.visible;
    }
}
