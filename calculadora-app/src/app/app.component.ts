import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /** Título de la aplicación */
  titulo = 'Aplicación Calculadora';

  /** Almacena el resultado de la suma recibido del componente hijo */
  resultadoPadre: number;

  /**
   * Procesa el resultado de la suma emitido por el componente hijo
   * @param resultado - El resultado de la suma
   */
  procesarResultado(resultado: number): void {
    this.resultadoPadre = resultado;
  }
}
