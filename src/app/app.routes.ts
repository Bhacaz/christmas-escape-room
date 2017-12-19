import {Routes} from "@angular/router";
import {IntroComponent} from "./story/intro/intro.component";
import {MariageComponent} from "./story/mariage/mariage.component";

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: '1', component: MariageComponent },
  { path: '**', redirectTo: 'intro' }
];
