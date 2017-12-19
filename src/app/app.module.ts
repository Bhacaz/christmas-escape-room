import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import { IntroComponent } from './story/intro/intro.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { MariageComponent } from './story/mariage/mariage.component';
import {FormsModule} from "@angular/forms";
import {TimerService} from "./timer/timer.service";
import { MotCacheComponent } from './story/mot-cache/mot-cache.component';
import { ObjectPerduComponent } from './story/object-perdu/object-perdu.component';
import { CarreParfaitComponent } from './story/carre-parfait/carre-parfait.component';
import { LatinComponent } from './story/latin/latin.component';
import { ChimieComponent } from './story/chimie/chimie.component';
import { EncoreCarreComponent } from './story/encore-carre/encore-carre.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent,
    MariageComponent,
    MotCacheComponent,
    ObjectPerduComponent,
    CarreParfaitComponent,
    LatinComponent,
    ChimieComponent,
    EncoreCarreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
