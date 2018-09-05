"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let HowToComponent = class HowToComponent {
    constructor() {
        this.activeFeature = EFeature.createSearch;
        this.EFeature = EFeature;
    }
    ngOnInit() {
    }
    setFeature(feature) {
        this.activeFeature = feature;
    }
};
HowToComponent = __decorate([
    core_1.Component({
        selector: 'app-how-to',
        templateUrl: './how-to.component.html',
        styleUrls: ['./how-to.component.scss']
    })
], HowToComponent);
exports.HowToComponent = HowToComponent;
var EFeature;
(function (EFeature) {
    EFeature["createSearch"] = "createSearch";
    EFeature["invitePeople"] = "invitePeople";
    EFeature["getIdeas"] = "getIdeas";
    EFeature["getInformation"] = "getInformation";
    EFeature["giveOpinion"] = "giveOpinion";
    EFeature["watchResults"] = "watchResults";
})(EFeature || (EFeature = {}));
//# sourceMappingURL=how-to.component.js.map