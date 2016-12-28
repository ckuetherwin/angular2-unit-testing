import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {InvoicesComponent} from './pages/invoices/invoices.component';
import {InvoiceDetailsComponent} from './pages/invoices/invoice-details/invoice-details.component';
import {StatementsComponent} from './pages/statements/statements.components';
import {MakeAPaymentComponent} from './pages/payments/make-a-payment/make-a-payment.component';
import {PaymentMethodComponent} from './pages/payments/payment-method/payment-method.component';
import {ManageAutoPayComponent} from './pages/payments/manage-autopay/manage-autopay.component';
import {ViewMyPaymentsComponent} from './pages/payments/view-my-payments/view-my-payments.component';
import {AccountServicesComponent} from './pages/account-services/account-services.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'invoices', component: InvoicesComponent},
    {path: 'invoices/invoice-details', component: InvoiceDetailsComponent},
    {path: 'statements', component: StatementsComponent},
    {path: 'payments', redirectTo: '/payments/make-a-payment', pathMatch: 'full'},
    {path: 'payments/make-a-payment', component: MakeAPaymentComponent},
    {path: 'payments/payment-method', component: PaymentMethodComponent},
    {path: 'payments/manage-autopay', component: ManageAutoPayComponent},
    {path: 'payments/view-my-payments', component: ViewMyPaymentsComponent},
    {path: 'account-services', component: AccountServicesComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
