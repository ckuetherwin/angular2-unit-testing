import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent}   from './app.component';
import {DynamicFormComponent} from './components/dynamic-form/dynamic-form.component';
import {DynamicQuestionComponent} from './components/dynamic-question/dynamic-question.component';

import {FormService} from './services/form.service';
import {FauxFormsService} from './services/in-memory.service';
import {RestService} from './services/rest.service';

// import { ModalModule } from 'angular2-modal';
// import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, InMemoryWebApiModule.forRoot(FauxFormsService)],
    declarations: [ AppComponent, DynamicFormComponent, DynamicQuestionComponent ],
    providers:    [ FormService, RestService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
