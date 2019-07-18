import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';


const routes: Routes = [
  { path: 'chicago',component: ChicagoComponent },
  { path: 'burbank', component: BurbankComponent},
  { path: 'washington', component: DcComponent},
  { path: 'dallas', component: DallasComponent},
  { path: 'seattle',component: SeattleComponent},
  { path: 'sanjose', component: SanJoseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
