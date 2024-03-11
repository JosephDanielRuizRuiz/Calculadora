import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SuperCalculadoraComponent } from './super-calculadora/super-calculadora.component';
import { Calculdora2Component } from './calculdora2/calculdora2.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/calculdora2',
    pathMatch:'full'
  },
  {
    path:'calculdora2',
    component: Calculdora2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
