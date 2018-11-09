import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './templete/hello.component.html',
  styleUrls: ['./assets/hello.component.css']
})
export class HelloComponent {
  title = 'Hola Mundo!';
}
