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
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
        // el.nativeElement.style.backgroundColor = "yellow";
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.Highlight("yellow");
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.Highlight(null);
    };
    HighlightDirective.prototype.Highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = this.HighlightColor || color;
    };
    return HighlightDirective;
}());
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onMouseLeave", null);
__decorate([
    core_1.Input("my-Highlight"),
    __metadata("design:type", String)
], HighlightDirective.prototype, "HighlightColor", void 0);
HighlightDirective = __decorate([
    core_1.Directive({
        selector: "[my-Highlight]"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map