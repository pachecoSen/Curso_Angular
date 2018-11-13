import { Component } from '@angular/core';

import { MainModel } from './main.model';

@Component({
	selector: 'main-app-root',
	templateUrl: './assets/main.component.html',
	styleUrls: ['./assets/main.component.css']
})
export class MainComponent {
	public title:string;
	public empleado:MainModel;
	public empleado_s:Array<MainModel>;

	constructor(){
		this.title = 'Componente Empleados';
		this.empleado = new MainModel('Jose Pacheco', 24, true, ['Gerente']);
		this.empleado_s = [
			new MainModel('Ignacio Cruz', 24, true, ['Limpieza', 'Cosina']),
			new MainModel('Ignacio Pacheco', 24, true, ['Recepcion', 'Seguridad']),
			new MainModel('Jose Cruz', 24, true, ['Aistente General']),
		];
	}

	ngOnInit(){}
}
