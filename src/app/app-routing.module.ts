import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IfComponent} from './if/if.component';

const routes: Routes = [
  {path: '', component: IfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
