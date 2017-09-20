"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CollapsableComponent = (function () {
    function CollapsableComponent() {
        this.visible = false;
    }
    CollapsableComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    return CollapsableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CollapsableComponent.prototype, "title", void 0);
CollapsableComponent = __decorate([
    core_1.Component({
        selector: "collapsable-well",
        template: "\n    <div class='well'>\n    <h2 (click)='toggleContent()'>{{title}}</h2>\n    <ng-content *ngIf='visible'></ng-content>\n    </div>\n    "
    })
], CollapsableComponent);
exports.CollapsableComponent = CollapsableComponent;
//# sourceMappingURL=collapsable.component.js.map