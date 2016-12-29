import {Component} from '@angular/core';

import {FormData, Question} from './models';

import {FormService} from './services/form.service';
import {RestService} from './services/rest.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    forms: FormData[] = null;
    selectedForm: FormData = null;

    constructor(private formService: FormService, restService: RestService) {
        restService.getForms().subscribe((forms: FormData[]) => {
            this.formService.setForms(forms);
            this.forms = this.formService.getAllForms();
        });
    }

    selectForm(formId: number) {
        this.selectedForm = this.formService.getForm(formId);
    }

}
