"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let EventsService = class EventsService {
    constructor() {
        this.messageSubject = new rxjs_1.Subject();
        this.messageObs = this.messageSubject.asObservable();
    }
    emit(channel, payload) {
        console.log('emit', channel, payload);
        this.messageSubject.next({ channel, payload });
    }
};
EventsService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map