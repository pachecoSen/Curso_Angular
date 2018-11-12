import { Component } from '@angular/core';

@Component({
  selector: 'tag-empleado',
  templateUrl: './templete/empleado.component.html',
  styleUrls: ['./assets/empleado.component.css']
})
export class EmpleadoComponent {
	public title = 'Empleado';
	public nombre = 'José Ignacio';
	public a_paterno = 'Pacheco';
	public a_materno = 'cruz';
}
