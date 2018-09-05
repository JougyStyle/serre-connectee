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
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
const in_memory_data_service_1 = require("./in-memory-data.service");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const page_home_component_1 = require("./page-home/page-home.component");
const page_prenom_component_1 = require("./page-prenom/page-prenom.component");
const page_streaming_component_1 = require("./page-streaming/page-streaming.component");
const page_sortie_component_1 = require("./page-sortie/page-sortie.component");
const chat_messages_component_1 = require("./chat-messages/chat-messages.component");
const chat_message_component_1 = require("./chat-message/chat-message.component");
const phone_layer_component_1 = require("./phone-layer/phone-layer.component");
const tutorial_create_search_component_1 = require("./tutorial-create-search/tutorial-create-search.component");
const tutorial_get_information_component_1 = require("./tutorial-get-information/tutorial-get-information.component");
const tutorial_get_ideas_component_1 = require("./tutorial-get-ideas/tutorial-get-ideas.component");
const tutorial_give_opinion_component_1 = require("./tutorial-give-opinion/tutorial-give-opinion.component");
const tutorial_invite_people_component_1 = require("./tutorial-invite-people/tutorial-invite-people.component");
const tutorial_watch_result_component_1 = require("./tutorial-watch-result/tutorial-watch-result.component");
const how_to_component_1 = require("./how-to/how-to.component");
const our_usecases_component_1 = require("./our-usecases/our-usecases.component");
const auto_updating_text_component_1 = require("./auto-updating-text/auto-updating-text.component");
const padded_container_component_1 = require("./padded-container/padded-container.component");
const seo_service_1 = require("./seo.service");
const animation_service_1 = require("./animation.service");
const events_service_1 = require("./events.service");
const scroll_to_section_directive_1 = require("./scroll-to-section.directive");
const safe_pipe_1 = require("./safe.pipe");
const core_2 = require("@angular/core");
const common_1 = require("@angular/common");
let AppModule = class AppModule {
    constructor(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        const platform = common_1.isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'bdz-website' }),
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule,
            angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false })
        ],
        declarations: [
            safe_pipe_1.SafePipe,
            scroll_to_section_directive_1.ScrollToSectionDirective,
            app_component_1.AppComponent,
            page_home_component_1.PageHomeComponent,
            page_prenom_component_1.PagePrenomComponent,
            page_streaming_component_1.PageStreamingComponent,
            page_sortie_component_1.PageSortieComponent,
            chat_messages_component_1.ChatMessagesComponent,
            chat_message_component_1.ChatMessageComponent,
            phone_layer_component_1.PhoneLayerComponent,
            tutorial_get_ideas_component_1.TutorialGetIdeasComponent,
            tutorial_give_opinion_component_1.TutorialGiveOpinionComponent,
            tutorial_invite_people_component_1.TutorialInvitePeopleComponent,
            tutorial_create_search_component_1.TutorialCreateSearchComponent,
            tutorial_get_information_component_1.TutorialGetInformationComponent,
            tutorial_watch_result_component_1.TutorialWatchResultComponent,
            how_to_component_1.HowToComponent,
            our_usecases_component_1.OurUsecasesComponent,
            padded_container_component_1.PaddedContainerComponent,
            auto_updating_text_component_1.AutoUpdatingTextComponent,
        ],
        providers: [seo_service_1.SEOService, animation_service_1.AnimationService, events_service_1.EventsService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __param(0, core_2.Inject(core_2.PLATFORM_ID)),
    __param(1, core_2.Inject(core_2.APP_ID))
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map