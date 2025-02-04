import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  //@Input() Decorador: Permite pasar datos del componente padre al componente hijo.
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService){

  }

  emitirSaludo(){
  this.personasService.saludar.emit(this.indice);
  }

}
