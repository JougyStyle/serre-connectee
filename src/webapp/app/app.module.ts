import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PagePrenomComponent } from './page-prenom/page-prenom.component';
import { PageStreamingComponent } from './page-streaming/page-streaming.component';
import { PageSortieComponent } from './page-sortie/page-sortie.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { PhoneLayerComponent } from './phone-layer/phone-layer.component';
import { TutorialCreateSearchComponent } from './tutorial-create-search/tutorial-create-search.component';
import { TutorialGetInformationComponent } from './tutorial-get-information/tutorial-get-information.component';
import { TutorialGetIdeasComponent } from './tutorial-get-ideas/tutorial-get-ideas.component';
import { TutorialGiveOpinionComponent } from './tutorial-give-opinion/tutorial-give-opinion.component';
import { TutorialInvitePeopleComponent } from './tutorial-invite-people/tutorial-invite-people.component';
import { TutorialWatchResultComponent } from './tutorial-watch-result/tutorial-watch-result.component';
import { HowToComponent } from './how-to/how-to.component';
import { OurUsecasesComponent } from './our-usecases/our-usecases.component';
import { AutoUpdatingTextComponent } from './auto-updating-text/auto-updating-text.component';
import { PaddedContainerComponent } from './padded-container/padded-container.component';

import { SEOService } from './seo.service';
import { AnimationService } from './animation.service';
import { EventsService } from './events.service';

import { ScrollToSectionDirective } from './scroll-to-section.directive';

import { SafePipe } from './safe.pipe';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'bdz-website' }),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    SafePipe,
    ScrollToSectionDirective,
    AppComponent,
    PageHomeComponent,
    PagePrenomComponent,
    PageStreamingComponent,
    PageSortieComponent,
    ChatMessagesComponent,
    ChatMessageComponent,
    PhoneLayerComponent,
    TutorialGetIdeasComponent,
    TutorialGiveOpinionComponent,
    TutorialInvitePeopleComponent,
    TutorialCreateSearchComponent,
    TutorialGetInformationComponent,
    TutorialWatchResultComponent,
    HowToComponent,
    OurUsecasesComponent,
    PaddedContainerComponent,
    AutoUpdatingTextComponent,
  ],
  providers: [ SEOService, AnimationService, EventsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
