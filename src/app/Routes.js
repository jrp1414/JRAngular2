"use strict";
var product_list_component_1 = require("./Products/product_list.component");
var product_details_component_1 = require("./Products/product_details.component");
var error_component_1 = require("./shared/error.component");
var create_Product_component_1 = require("./Products/create_Product.component");
var product_edit_component_1 = require("./Products/product.edit.component");
exports.appRoutes = [
    { path: "products/new", component: create_Product_component_1.CreateProductComponent, canDeactivate: ["CreateProductDeactivate"] },
    { path: "products", component: product_list_component_1.ProductListComponent },
    { path: "products/:id", component: product_details_component_1.ProductDetailsComponent },
    { path: "editProduct/:id", component: product_edit_component_1.ProductEditComponent },
    { path: "404", component: error_component_1.Error404Component },
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "user", loadChildren: "app/user/user.module#UserModule" }
];
//# sourceMappingURL=Routes.js.map