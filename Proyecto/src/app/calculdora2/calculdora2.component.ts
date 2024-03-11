import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculdora2',
  templateUrl: './calculdora2.component.html',
  styleUrls: ['./calculdora2.component.css']
})
export class Calculdora2Component implements OnInit {

  constructor() { }

  OperacionPrimera:any='';
  OperacionSegunda:any='';
  primeraOperacion=true;

  Adicionar(value:any):void{
    if(this.primeraOperacion){
      if(+value >= 0 ||value === "."){
        this.adicionarDigito(value)
      }else{
        this.ProcesoOperacion(value)
      }
    }else{
      this.OperacionPrimera="";
      this.OperacionSegunda="";
      this.primeraOperacion=true;
      if(value >= 0 || value === "."){
        this.adicionarDigito(value)
      }else{
        this.ProcesoOperacion(value)
      }
    }
  }

  adicionarDigito(digito:any){
    if(digito === "." && this.OperacionSegunda.includes(".")){
      return
    }
    this.OperacionSegunda += digito;
    this.actualizarOperacion(null,null,null,null)
  }

  ProcesoOperacion(operacion:any){
    if(this.OperacionSegunda === "" && operacion !== "C"){
      if(this.OperacionPrimera != ""){
        this.alterarOperacion(operacion)
      }
      return
    }

    let valorOperacion:any;
    let Primera = +this.OperacionPrimera.split(" ")[0];
    let Segunda = +this.OperacionSegunda;

    switch(operacion){
      case"+":
      valorOperacion = Primera + Segunda;
      this.actualizarOperacion(valorOperacion, operacion, Segunda, Primera);
      break
      case"-":
      valorOperacion = Primera - Segunda;
      this.actualizarOperacion(valorOperacion, operacion, Segunda, Primera);
      break
      case"*":
      valorOperacion = Primera * Segunda;
      this.actualizarOperacion(valorOperacion, operacion, Segunda, Primera);
      break
      case"/":
      valorOperacion = Primera / Segunda;
      this.actualizarOperacion(valorOperacion, operacion, Segunda, Primera);
      break
      case"DEL":
      this.procesoDel()
      break
      case"CE":
      this.procesoCE()
      break
      case"C":
      this.procesoC()
      break
      case"=":
      this.procesoIgual()
      break
    }

  }

  alterarOperacion(operacion:any){
    const operaciones = ["+","-","/","*"]
    if(!operacion.includes(operacion)){
      return
    }
    this.OperacionPrimera = this.OperacionPrimera.trim().slice(0, -1) + operacion;
  }

  actualizarOperacion(
    valorOperacion = null,
    operacion = null,
    Segunda:any,
    Primera:any
  ){

    console.log(valorOperacion)
  if(valorOperacion !== null){
    if(Primera === 0){
      valorOperacion = Segunda;
    }
    this.OperacionPrimera = `${Segunda} ${operacion}`
    if(Primera > 0){
      this.OperacionPrimera = `${Primera} ${operacion} ${Segunda} = `
      this.OperacionSegunda = valorOperacion;
    }else{
      this.OperacionSegunda = "";
    }
    
  }

}

  procesoDel(){
    this.OperacionSegunda = this.OperacionSegunda.slice(0,-1);
  }
  procesoCE(){
    this.OperacionSegunda=""
  }
  procesoC(){
    this.OperacionPrimera=""
    this.OperacionSegunda=""
  }
  procesoIgual(){
    let operacion = this.OperacionPrimera.split(" ")[1]
    this.primeraOperacion = false;
    this.ProcesoOperacion(operacion)
  
  }

  ngOnInit(): void {
  }

}
