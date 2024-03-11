import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SuperCalculadoraComponent } from './super-calculadora/super-calculadora.component';
import { Calculdora2Component } from './calculdora2/calculdora2.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/super-calculadora',
    pathMatch:'full'
  },
  {
    path:'super-calculadora',
    component: SuperCalculadoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
