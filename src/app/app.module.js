"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./Dashboard/welcome.component");
var Index_1 = require("./Index");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var Routes_1 = require("./Routes");
var auth_service_1 = require("./user/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Index_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(Routes_1.appRoutes), http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            Index_1.ProductListComponent,
            Index_1.BookComponent,
            Index_1.StarComponent,
            Index_1.ProductFilterPipe,
            Index_1.ProductDetailsComponent,
            Index_1.Error404Component,
            Index_1.CreateProductComponent
        ],
        providers: [
            Index_1.ProductService,
            Index_1.ProductDetailsActivator,
            { provide: "CreateProductDeactivate", useValue: CreateProductDeactivate },
            auth_service_1.AuthService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function CreateProductDeactivate(component) {
    if (component.isDirty) {
        if (window.confirm("Are you sure you want to cancel?")) {
            return true;
        }
        return false;
    }
}
exports.CreateProductDeactivate = CreateProductDeactivate;
//# sourceMappingURL=app.module.js.map