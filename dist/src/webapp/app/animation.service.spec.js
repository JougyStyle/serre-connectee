"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const animation_service_1 = require("./animation.service");
describe('AnimationService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [animation_service_1.AnimationService]
        });
    });
    it('should be created', testing_1.inject([animation_service_1.AnimationService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=animation.service.spec.js.map