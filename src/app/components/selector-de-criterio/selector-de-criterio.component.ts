import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
@Component({
  selector: 'app-selector-de-criterio',
  templateUrl: './selector-de-criterio.component.html',
  styleUrls: ['./selector-de-criterio.component.scss']
})
export class SelectorDeCriterioComponent implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  VerCriterioDetalle: boolean;
  VerCriteriosEmocional: boolean;
  VerCriteriosNecesidades: boolean;
  VerCriteriosAcademica: boolean;
  VerCriteriosSocial: boolean;
  OpcionesEmocional: Array<string> = ["Alegre", "Enojado", "Molesto", "Tranquilo", "Ansioso", "Triste", "Inquieto", "Disperso"];
  OpcionesNecesidadesBasicas: Array<string> = ["Comio", "Fue al Baño", "Tomo Agua",];
  OpcionesAcademicas: Array<string> = ["Matematica", "lengua", "Ciencias", "Plastica"];
  OpcionesSocial: Array<string> = ["Interactuo con compañeros", "se mostro predispuesto", "Presto atención a las consignas"];

  constructor(private uiService: UiServiceService,
    private navCtrl: NavController) { }
    
  ngOnInit() {
  }
  mostrarCriterio(id: number) {
    this.VerCriterioDetalle = !this.VerCriterioDetalle;

    switch (id) {
      case 1:
        this.VerCriteriosEmocional = true
        this.VerCriteriosNecesidades = false
        this.VerCriteriosAcademica = false
        this.VerCriteriosSocial = false
        break;
        case 2:
        this.VerCriteriosEmocional = false
        this.VerCriteriosNecesidades = true
        this.VerCriteriosAcademica = false
        this.VerCriteriosSocial = false
        break;
        case 3:
        this.VerCriteriosEmocional = false
        this.VerCriteriosNecesidades = false
        this.VerCriteriosAcademica = true
        this.VerCriteriosSocial = false
        break;
        case 4:
        this.VerCriteriosEmocional = false
        this.VerCriteriosNecesidades = false
        this.VerCriteriosAcademica = false
        this.VerCriteriosSocial = true
        break;
    }


  }
  OcutarCriterio() {
    this.VerCriterioDetalle = false;
  }



   actualizar( ) {
    this.uiService.presentToast('Registro actualizado');

    this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
  }
  cancelar(){
    this.navCtrl.navigateRoot( '/main/tabs/tab2', { animated: true } );
  }


}
