import { Component } from '@angular/core';

@Component({
	selector: 'main-app-root',
	templateUrl: './assets/main.component.html',
	styleUrls: ['./assets/main.component.css']
})
export class MainComponent {
	public nombre:string;
	public edad:number;
	public estatus:boolean;
	public materias:Array<String>;
	comodin:any;

	constructor(){
		this.nombre = 'Jose Ignacio';
		this.edad = 15;
		this.estatus = true;
		this.materias = ['Matematicas', 'Español', 'Historia'];
		this.comodin = 'Lo que sea es este parametro';
	}

	ngOnInit(){
		this.hola(undefined);
		this.hola(this.nombre);
		this.adios();
		this.adios(undefined);
		this.adios(this.nombre);
		this.persona('Drago').holaPersona();
	}

	persona(persona:string){
		this.nombre = persona;

		return this;
	}

	holaPersona(){
		console.log(this.nombre);
	}

	hola(persona:string = 'anonimo'){
		console.log('Hola' + persona);
	}

	adios(persona?:string){
		if(persona){
			console.log('Adios' + persona);	
			 return false;
		}
		console.log('Adios desconocido');	
	}
}
