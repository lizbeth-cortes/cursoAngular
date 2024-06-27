import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent{
  /** Emite un evento del componente hijo al padre cuando se crea una nueva Persona */
  //@Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = '';
  // apellidoInput: string = '';

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;


  constructor(private loggingService: LoggingService, private personasService: PersonasService){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("el indice es: " + indice)
    );
  }


  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value,
    );
    //this.personaCreada.emit(persona1);
    //this.loggingService.enviarMensajeConsola("Enviamos persona: " + persona1.nombre + persona1.apellido);
    this.personasService.agregarPersona(persona1);
  }
}
