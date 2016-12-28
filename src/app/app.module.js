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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var app_component_1 = require('./app.component');
var navbar_component_1 = require("./shared/components/navbar/navbar.component");
var payments_navbar_component_1 = require("./pages/payments/payments-navbar.component");
var navbar_service_1 = require("./services/navbar.service");
var constants_service_1 = require("./services/constants.service");
var home_module_1 = require("./pages/home/home.module");
var not_found_module_1 = require("./pages/not-found/not-found.module");
var invoices_module_1 = require("./pages/invoices/invoices.module");
var statements_module_1 = require("./pages/statements/statements.module");
var payments_module_1 = require("./pages/payments/payments.module");
var account_services_module_1 = require("./pages/account-services/account-services.module");
var angular2_modal_1 = require('angular2-modal');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, home_module_1.HomeModule, invoices_module_1.InvoicesModule, statements_module_1.StatementsModule, payments_module_1.PaymentsModule,
                account_services_module_1.AccountServicesModule, not_found_module_1.NotFoundModule, angular2_modal_1.ModalModule.forRoot(), bootstrap_1.BootstrapModalModule],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, payments_navbar_component_1.PaymentsNavbarComponent],
            providers: [app_routing_1.appRoutingProviders, navbar_service_1.NavbarService, constants_service_1.ConstantsService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map