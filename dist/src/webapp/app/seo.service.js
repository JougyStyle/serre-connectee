"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const operators_1 = require("rxjs/operators");
let SEOService = class SEOService {
    constructor(titleService, metaService, router) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.router = router;
    }
    addSeoData() {
        this.router.events.pipe(operators_1.filter((event) => event instanceof router_1.NavigationEnd)).subscribe(() => {
            var root = this.router.routerState.snapshot.root;
            while (root) {
                if (root.children && root.children.length) {
                    root = root.children[0];
                }
                else if (root.data && root.data["title"]) {
                    this.titleService.setTitle(root.data["title"] + " | Buddiz");
                    let tags = root.data["metatags"];
                    for (let tag in tags) {
                        this.metaService.updateTag({ name: tag, content: tags[tag] });
                    }
                    return;
                }
                else {
                    return;
                }
            }
        });
    }
};
SEOService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], SEOService);
exports.SEOService = SEOService;
//# sourceMappingURL=seo.service.js.map