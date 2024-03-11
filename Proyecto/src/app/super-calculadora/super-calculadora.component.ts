import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-calculadora',
  templateUrl: './super-calculadora.component.html',
  styleUrls: ['./super-calculadora.component.css']
})
export class SuperCalculadoraComponent implements OnInit {

  constructor() { }

  /*Variables*/
  Valor1='';
  Valor2='';
  Resultado!:number;

  Suma():void{
    this.Resultado = (parseFloat(this.Valor1)+parseFloat(this.Valor2))
  }

  Resta():void{
    this.Resultado = (parseFloat(this.Valor1)-parseFloat(this.Valor2))
  }
  Multiplicacion():void{
    this.Resultado = (parseFloat(this.Valor1)*parseFloat(this.Valor2))
  }

  Division():void{
    this.Resultado = (parseFloat(this.Valor1)/parseFloat(this.Valor2))
  }

  Porcentaje():void{
    this.Resultado = ((parseFloat(this.Valor1))*(parseFloat(this.Valor2)/100))
  }

  Raiz():void{
    this.Resultado = Math.sqrt((parseFloat(this.Valor1)))
  }

  Euler():void{
    this.Resultado = Math.exp((parseFloat(this.Valor1)))
  }

  PI():void{
    this.Resultado = Math.PI*(parseFloat(this.Valor1))
  }

  Exponente():void{
    this.Resultado = Math.pow(parseFloat(this.Valor1),parseFloat(this.Valor2))
  }

  Logaritmo():void{
    this.Resultado = Math.log10(parseFloat(this.Valor1))
  }

  Seno():void{
    this.Resultado = Math.sin(parseFloat(this.Valor1))
  }

  Coseno():void{
    this.Resultado = Math.cos(parseFloat(this.Valor1))
  }

  Tangente():void{
    this.Resultado = Math.tan(parseFloat(this.Valor1))
  }

  /*
  
                    
                    <!--Euler-->
                    <button type="submit" (click)="Euler()">Euler
                    </button>
                    <!--Exponente-->
                    <button type="submit" (click)="Exponente()">Exponente
                    </button>
                    <!--Logaritmo-->
                    <button type="submit" (click)="Logaritmo()">Logaritmo
                    </button>
                    <!--Seno-->
                    <button type="submit" (click)="Seno()">Seno
                    </button>
                    <!--Coseno-->
                    <button type="submit" (click)="Coseno()">Coseno
                    </button>
                    <!--Tangente-->
                    <button type="submit" (click)="Tangente()">Tangente
                    </button>
                    <!--PI-->
                    <button type="submit" (click)="PI()">PI
                    </button>
  */

  ngOnInit(): void {
  }

}
