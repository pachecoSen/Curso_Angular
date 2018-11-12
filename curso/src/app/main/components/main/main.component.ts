import { Component } from '@angular/core';

@Component({
	selector: 'main-app-root',
	templateUrl: './assets/main.component.html',
	styleUrls: ['./assets/main.component.css']
})
export class MainComponent {
	public nombre:string = 'Ejercios Datos y propiedades';
	public edad:number = 15;
	public estatus:boolean = true;
	public materias:Array<String> = ['Matematicas', 'Español', 'Historia'];
	comodin:any = 'Lo que sea es este parametro';
}
