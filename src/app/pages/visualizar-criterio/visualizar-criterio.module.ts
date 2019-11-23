import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualizarCriterioPage } from './visualizar-criterio.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarCriterioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisualizarCriterioPage]
})
export class VisualizarCriterioPageModule {}
