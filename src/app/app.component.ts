import {Component} from '@angular/core';

import {Question} from './models/question.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: []
})

export class AppComponent{
    questions: Array<Question>;

    constructor() {
        this.questions = [];
    }

}
