import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Villano } from './villano';
@Component({
 selector: 'app-villano',
 templateUrl: './villano.component.html',
 styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
selectedVillano?: Villano;
villanos: Villano[]=[ {id:1, name: "El pinguino", poder:"lanzapinguinos", nivel: 100}

];
 numero = 0;
 base = 5;
 constructor() { }
 ngOnInit() {
 }
 onSelect(villano: Villano): void {
 this.selectedVillano = villano;
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
