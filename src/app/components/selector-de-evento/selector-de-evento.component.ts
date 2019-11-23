import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
@Component({
  selector: 'app-selector-de-evento',
  templateUrl: './selector-de-evento.component.html',
  styleUrls: ['./selector-de-evento.component.scss']
})
export class SelectorDeEventoComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  nuevaAtencion(){
    // this.navCtrl.navigateRoot( '/main/tabs/Criterio', { animated: true } );
    this.navCtrl.navigateRoot( '/main/tabs/criterio', { animated: true } );
  }
  criterios(){
    this.navCtrl.navigateRoot( '/main/tabs/criterio', { animated: true } );
  }
  sinCriterios(){
    this.navCtrl.navigateRoot( '/main/tabs/criterio', { animated: true } );
  }
}
