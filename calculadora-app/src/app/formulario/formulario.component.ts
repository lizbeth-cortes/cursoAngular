import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  /** Almacena el valor del operando A */
  operandoA: number;

  /** Almacena el valor del operando B */
  operandoB: number;

  /** Emite el resultado de la suma al componente padre */
  @Output() resultadoSuma = new EventEmitter<number>();

  /**
   * Suma los operandos y emite el resultado
   */
  sumar(): void {
    const resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
}
