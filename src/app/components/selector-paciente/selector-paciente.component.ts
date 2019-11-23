import { Component, OnInit, Input } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../interfaces/interfaces';
@Component({
  selector: 'app-selector-paciente',
  templateUrl: './selector-paciente.component.html',
  styleUrls: ['./selector-paciente.component.scss']
})
export class SelectorPacienteComponent implements OnInit {

  private pacientes : Paciente[];
  constructor(  private _pacienteService: PacienteService) { }

  ngOnInit() {

    this.pacientes = this._pacienteService.getPacientes(); 
    console.log(this.pacientes)
  }

}
