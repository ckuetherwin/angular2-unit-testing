import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from '@angular/forms';

import {AppComponent}   from './app.component';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {DynamicQuestionComponent} from './components/dynamic-question/dynamic-question.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
    imports:      [ BrowserModule, routing, FormsModule, ModalModule.forRoot(), BootstrapModalModule],
    declarations: [ AppComponent, DynamicFormComponent, DynamicQuestionComponent ],
    providers:    [ appRoutingProviders],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
