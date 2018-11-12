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
		var n_uno = 8;
		var n_dos = 5;

		if(n_uno === 8){
			var n_uno = 16;
			let n_dos = 10;
			console.log('Dentro de If');
			console.log(n_uno);
			console.log(n_dos);
		}
		console.log('Fuera de If');
		console.log(n_uno);
		console.log(n_dos);
	}
}
