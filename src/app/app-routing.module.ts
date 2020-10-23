import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdasComponent} from './adas/adas.component';

const routes: Routes = [
  { path: 'adas/:id', component: AdasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
