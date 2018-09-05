import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageHomeComponent }   from './page-home/page-home.component';
import { PagePrenomComponent }   from './page-prenom/page-prenom.component';
import { PageStreamingComponent }   from './page-streaming/page-streaming.component';
import { PageSortieComponent }   from './page-sortie/page-sortie.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: PageHomeComponent,
  data: {
    title: "Un outil pour se mettre d'accord",
    metatags: {
      description: "Vous devez vous mettre d'accord avec des amis ? Pour une sortie resto, un cadeau, un prénom ? Buddiz peut vous aider !",
      keywords: "moteur de recherche, outil collaboratif, trouver une idée, se mettre d'accord"
    }
  }
}, {
  path: 'prenom',
  redirectTo: '/trouver-un-prenom',
  pathMatch: 'full'
}, {
  path: 'trouver-un-prenom',
  component: PagePrenomComponent,
  data: {
    title: "Un prénom pour un bébé",
    metatags: {
      description: "Vous cherchez un prénom ? On peut vous aider...",
      keywords: "prénom, prénom garçon, prénom fille"
    }
  }
}, {
  path: 'streaming',
  redirectTo: '/trouver-un-film-ou-serie-a-regarder',
  pathMatch: 'full'
}, {
  path: 'trouver-un-film-ou-serie-a-regarder',
  component: PageStreamingComponent,
  data: {
    title: "Un film pour ce soir",
    metatags: {
      description: "Ce soir, c'est soirée canapée ? On peut vous aider pour le programme télé. Film ou série, sur Amazon Prime ou Netflix...",
      keywords: "Film, Série, Netflix, Amazon Prime"
    }
  }
}, {
  path: 'sortie',
  redirectTo: '/trouver-un-endroit-ou-sortir',
  pathMatch: 'full'
}, {
  path: 'trouver-un-endroit-ou-sortir',
  component: PageSortieComponent,
  data: {
    title: "Resto, spectacle...",
    metatags: {
      description: "Vous avez prévu de sortir au resto, et d'enchainer avec un spectacle ? Buddiz vous aide à définir le programme qui plaira à tout le monde !",
      keywords: "Resto, Restaurant, Théâtre, Concert, sortie entre amis"
    }
  }
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
