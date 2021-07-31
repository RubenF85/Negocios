import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EstimatesComponent } from './pages/estimates/estimates.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstimatesComponent,
    CommingSoonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
