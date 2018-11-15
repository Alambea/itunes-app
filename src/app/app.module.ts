import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonSearchbarComponent } from './ion-searchbar/ion-searchbar.component';
import { CardSongComponent } from './card-song/card-song.component';

@NgModule({
  declarations: [
    AppComponent,
    IonSearchbarComponent,
    CardSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
