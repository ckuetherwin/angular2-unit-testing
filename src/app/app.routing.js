"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./pages/home/home.component");
var not_found_component_1 = require("./pages/not-found/not-found.component");
var invoices_component_1 = require("./pages/invoices/invoices.component");
var invoice_details_component_1 = require("./pages/invoices/invoice-details/invoice-details.component");
var statements_components_1 = require("./pages/statements/statements.components");
var make_a_payment_component_1 = require("./pages/payments/make-a-payment/make-a-payment.component");
var payment_method_component_1 = require("./pages/payments/payment-method/payment-method.component");
var manage_autopay_component_1 = require("./pages/payments/manage-autopay/manage-autopay.component");
var view_my_payments_component_1 = require("./pages/payments/view-my-payments/view-my-payments.component");
var account_services_component_1 = require("./pages/account-services/account-services.component");
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'invoices', component: invoices_component_1.InvoicesComponent },
    { path: 'invoices/invoice-details', component: invoice_details_component_1.InvoiceDetailsComponent },
    { path: 'statements', component: statements_components_1.StatementsComponent },
    { path: 'payments', redirectTo: '/payments/make-a-payment', pathMatch: 'full' },
    { path: 'payments/make-a-payment', component: make_a_payment_component_1.MakeAPaymentComponent },
    { path: 'payments/payment-method', component: payment_method_component_1.PaymentMethodComponent },
    { path: 'payments/manage-autopay', component: manage_autopay_component_1.ManageAutoPayComponent },
    { path: 'payments/view-my-payments', component: view_my_payments_component_1.ViewMyPaymentsComponent },
    { path: 'account-services', component: account_services_component_1.AccountServicesComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map