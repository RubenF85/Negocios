import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EstimatesComponent } from './pages/estimates/estimates.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { ValuationsDesktopComponent } from './pages/valuations-desktop/valuations-desktop.component';
import { ValuationsFullComponent } from './pages/valuations-full/valuations-full.component';
import { ValuationsDeltaComponent } from './pages/valuations-delta/valuations-delta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstimatesComponent,
    CommingSoonComponent,
    ValuationsDesktopComponent,
    ValuationsFullComponent,
    ValuationsDeltaComponent
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
