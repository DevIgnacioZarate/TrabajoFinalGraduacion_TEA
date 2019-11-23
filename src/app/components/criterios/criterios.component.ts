import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.scss']
})
export class CriteriosComponent implements OnInit {


  constructor() {
   
   }

  @Input() opcionesList: Array<string>;
  
  opciones:  Array<string>;
  ngOnInit() {
    console.log(this.opcionesList);
    this.opciones = this.opcionesList;
  }



}
