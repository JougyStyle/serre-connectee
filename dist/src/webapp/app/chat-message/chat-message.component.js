"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ChatMessageComponent = class ChatMessageComponent {
    constructor() {
        this.side = 'left';
    }
    ngOnInit() { }
};
__decorate([
    core_1.Input()
], ChatMessageComponent.prototype, "side", void 0);
ChatMessageComponent = __decorate([
    core_1.Component({
        selector: 'app-chat-message',
        templateUrl: './chat-message.component.html',
        styleUrls: ['./chat-message.component.scss']
    })
], ChatMessageComponent);
exports.ChatMessageComponent = ChatMessageComponent;
//# sourceMappingURL=chat-message.component.js.map