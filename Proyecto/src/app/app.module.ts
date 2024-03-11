import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperCalculadoraComponent } from './super-calculadora/super-calculadora.component';
import { Calculdora2Component } from './calculdora2/calculdora2.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperCalculadoraComponent,
    Calculdora2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
