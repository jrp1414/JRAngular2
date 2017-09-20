import { Component, Input } from "@angular/core"

@Component({
    selector: "collapsable-well",
    template: `
    <div class='well' (click)='toggleContent()' >
    <ng-content select=[collapsable-title]></ng-content>
    <ng-content *ngIf='visible' select=[collapsable-body]></ng-content>
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
