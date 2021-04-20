import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {


  title = 'contador';
  numero = 10;
  base = 5;
  constructor() { }

  ngOnInit(): void {
  }

  acumulador(valor:number){
    this.numero += valor;
  }
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }

}
