"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const tutorial_give_opinion_component_1 = require("./tutorial-give-opinion.component");
describe('TutorialGiveOpinionComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [tutorial_give_opinion_component_1.TutorialGiveOpinionComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(tutorial_give_opinion_component_1.TutorialGiveOpinionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tutorial-give-opinion.component.spec.js.map