import { RouterModule, ActivatedRouteSnapshot } from "@angular/router";
import { HttpModule } from "@angular/http"
import { InMemoryWebApiModule } from "angular-in-memory-web-api"
import { AppComponent } from "./app.component"
import { WelcomeComponent } from "./Dashboard/welcome.component"
import {
    ProductService,
    ProductDetailsComponent,
    CreateProductComponent,
    ProductDetailsActivator,
    ProductFilterPipe,
    ProductListComponent,
    Error404Component,
    StarComponent,
    BookComponent, NgModule
} from "./Index"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { appRoutes } from "./Routes";
import { AuthService } from "./user/auth.service";
import { ProductDB } from "./Products/ProductDB";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule],
    declarations: [
        AppComponent,
        WelcomeComponent,
        ProductListComponent,
        BookComponent,
        StarComponent,
        ProductFilterPipe,
        ProductDetailsComponent,
        Error404Component,
        CreateProductComponent
    ],
    providers: [
        ProductService,
        ProductDetailsActivator,
        { provide: "CreateProductDeactivate", useValue: CreateProductDeactivate },
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

export function CreateProductDeactivate(component: CreateProductComponent): any {
    if (component.isDirty) {
        if (window.confirm("Are you sure you want to cancel?")) {
            return true;
        }
        return false;
    }
}