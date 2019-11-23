import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opciones-criterio',
  templateUrl: './opciones-criterio.component.html',
})
export class OpcionesCriterioComponent implements OnInit {
  @Input()  NombreCriterio: string;
  
  opcionesVisibles: boolean;
  constructor() { }

  ngOnInit() {
  }

  DesplegarOpciones(){
    this.opcionesVisibles = !this.opcionesVisibles;
  }
}
