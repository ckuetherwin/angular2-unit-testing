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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                <navbar (mobileSlideMenu)=\"slideMenuStatus = $event\"></navbar>\n                <div id=\"win-main-container\" class=\"container win-main-container\" [class.win-main-container-open]=\"slideMenuStatus==='true'\">\n                    <router-outlet></router-outlet>\n                </div>\n                ",
            styles: ["\n                @media (max-width: 767px) {\n                    .win-main-container{\n                        margin-left: 0;\n                        margin-right: 0;\n                    }\n                    .win-main-container-open{\n                        margin-left: 285px;\n                        margin-right: -285px;\n                    }\n                }\n                #win-main-container{\n                    -webkit-transition: all .3s ease-in-out;\n                    -moz-transition: all .3s ease-in-out;\n                    -o-transition: all .3s ease-in-out;\n                    transition: all .3s ease-in-out;\n                }\n            "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map