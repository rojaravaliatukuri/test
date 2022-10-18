import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { FormDirective } from './form.directive';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    HomeComponent,
    DetailComponent,
    FormDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
