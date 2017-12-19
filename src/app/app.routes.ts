import {Routes} from "@angular/router";
import {IntroComponent} from "./story/intro/intro.component";
import {MariageComponent} from "./story/mariage/mariage.component";
import {MotCacheComponent} from "./story/mot-cache/mot-cache.component";
import {ObjectPerduComponent} from "./story/object-perdu/object-perdu.component";
import {CarreParfaitComponent} from "./story/carre-parfait/carre-parfait.component";
import {LatinComponent} from "./story/latin/latin.component";
import {ChimieComponent} from "./story/chimie/chimie.component";
import {EncoreCarreComponent} from "./story/encore-carre/encore-carre.component";
import {EndComponent} from "./end/end.component";

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: '1', component: MariageComponent },
  { path: '2', component: MotCacheComponent },
  { path: '3', component: ObjectPerduComponent },
  { path: '4', component: CarreParfaitComponent },
  { path: '5', component: LatinComponent },
  { path: '6', component: ChimieComponent },
  { path: '7', component: EncoreCarreComponent },
  { path: 'end', component: EndComponent },
  { path: '**', redirectTo: 'intro' }
];
