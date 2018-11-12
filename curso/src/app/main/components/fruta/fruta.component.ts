import { Component } from '@angular/core';

@Component({
	selector: 'tag-frutas',
	templateUrl: './templete/fruta.component.html'
	//styleUrls: ['./assets/fruta.component.css']
})
export class FrutaComponent {
	public nombre_componente = 'Componente de Frutas';
	public lista_frutas = 'Mango, Sandia, Melon';
}