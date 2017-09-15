import {Routes} from "@angular/router"
import { ProductListComponent } from "./Products/product_list.component";
import { ProductDetailsComponent } from "./Products/product_details.component";
import { Error404Component } from "./shared/error.component";
import { CreateProductComponent } from "./Products/create_Product.component";
import { ProductDetailsActivator } from "./Products/product_Details_Activator";

export const appRoutes:Routes = [
{path:"products/new",component:CreateProductComponent,canDeactivate:["CreateProductDeactivate"]},
{path:"products",component:ProductListComponent},
{path:"products/:id",component:ProductDetailsComponent}, //,canActivate:[ProductDetailsActivator]
{path:"404",component:Error404Component},
{path:"",redirectTo:"products",pathMatch:"full"},
{path:"user",loadChildren:"app/user/user.module#UserModule"}
];