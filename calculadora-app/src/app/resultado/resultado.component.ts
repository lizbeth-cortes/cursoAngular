import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  /** Recibe el resultado de la suma desde el componente padre */
  @Input() resultadoHijo: number;
}
