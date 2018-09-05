"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
let AutoUpdatingTextComponent = class AutoUpdatingTextComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.availableValues = [];
        this.stringChangeTimer = 1000;
        this.charChangeTimer = 50;
    }
    ngOnInit() {
        let randomIndex = Math.floor(Math.random() * this.availableValues.length);
        this.value = this.availableValues[randomIndex];
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.changeTimer = setTimeout(() => this.changeText(), this.stringChangeTimer);
        }
    }
    ngOnDestroy() {
        clearTimeout(this.changeTimer);
    }
    changeText() {
        let direction = 'backward';
        let availableValues = [...this.availableValues];
        let currentValue = this.value;
        availableValues = availableValues.filter((val) => val !== currentValue);
        let nextValue = availableValues[Math.floor(Math.random() * Object.keys(availableValues).length)];
        let interval = setInterval(() => {
            if (direction === 'backward') {
                if (this.value.length > 0) {
                    this.value = this.removeLastCharacter(this.value);
                }
                else {
                    direction = 'forward';
                }
            }
            else {
                if (this.value.length < nextValue.length) {
                    this.value = this.addNextCharacter(this.value, nextValue);
                }
                else {
                    clearInterval(interval);
                    this.changeTimer = setTimeout(() => this.changeText(), this.stringChangeTimer);
                }
            }
        }, this.charChangeTimer);
    }
    removeLastCharacter(str) {
        return str.substring(0, str.length - 1);
    }
    addNextCharacter(str, targetStr) {
        return str + targetStr[str.length];
    }
};
__decorate([
    core_1.Input()
], AutoUpdatingTextComponent.prototype, "availableValues", void 0);
__decorate([
    core_1.Input()
], AutoUpdatingTextComponent.prototype, "stringChangeTimer", void 0);
__decorate([
    core_1.Input()
], AutoUpdatingTextComponent.prototype, "charChangeTimer", void 0);
AutoUpdatingTextComponent = __decorate([
    core_1.Component({
        selector: 'app-auto-updating-text',
        templateUrl: './auto-updating-text.component.html',
        styleUrls: ['./auto-updating-text.component.scss']
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID))
], AutoUpdatingTextComponent);
exports.AutoUpdatingTextComponent = AutoUpdatingTextComponent;
//# sourceMappingURL=auto-updating-text.component.js.map