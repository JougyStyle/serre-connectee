"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const tutorial_get_ideas_component_1 = require("./tutorial-get-ideas.component");
describe('TutorialGetIdeasComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [tutorial_get_ideas_component_1.TutorialGetIdeasComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(tutorial_get_ideas_component_1.TutorialGetIdeasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tutorial-get-ideas.component.spec.js.map