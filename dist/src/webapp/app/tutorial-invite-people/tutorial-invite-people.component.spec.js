"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const tutorial_invite_people_component_1 = require("./tutorial-invite-people.component");
describe('TutorialInvitePeopleComponent', () => {
    let component;
    let fixture;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [tutorial_invite_people_component_1.TutorialInvitePeopleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(tutorial_invite_people_component_1.TutorialInvitePeopleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tutorial-invite-people.component.spec.js.map