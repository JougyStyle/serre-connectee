"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const seo_service_1 = require("./seo.service");
describe('SEOService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [seo_service_1.SEOService]
        });
    });
    it('should be created', testing_1.inject([seo_service_1.SEOService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=seo.service.spec.js.map