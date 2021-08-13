import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ValuationsDesktopComponent } from './pages/valuations-desktop/valuations-desktop.component';
import { ValuationsFullComponent } from './pages/valuations-full/valuations-full.component';
import { ValuationsDeltaComponent } from './pages/valuations-delta/valuations-delta.component';
import { EstimatesComponent } from './pages/estimates/estimates.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'estimates', component: EstimatesComponent },
  { path: 'valuations/desktop', component: ValuationsDesktopComponent },
  { path: 'valuations/full', component: ValuationsFullComponent },
  { path: 'valuations/delta', component: ValuationsDeltaComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
