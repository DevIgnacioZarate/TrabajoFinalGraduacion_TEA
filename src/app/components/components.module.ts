import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';
import { CriteriosComponent } from './criterios/criterios.component';
import { SelectorDeCriterioComponent } from './selector-de-criterio/selector-de-criterio.component';
import { SelectorDeEventoComponent } from './selector-de-evento/selector-de-evento.component';
import { PacienteHeaderComponent } from './paciente-header/paciente-header.component';
import { OpcionesCriterioComponent } from './opciones-criterio/opciones-criterio.component';
import { SelectorPacienteComponent } from './selector-paciente/selector-paciente.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    AvatarSelectorComponent,
    MapaComponent,
    CriteriosComponent,
    SelectorDeCriterioComponent,
    SelectorDeEventoComponent,
    PacienteHeaderComponent,
    OpcionesCriterioComponent,
    SelectorPacienteComponent    
  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent,
    CriteriosComponent,
    SelectorDeCriterioComponent,
    SelectorDeEventoComponent,
    PacienteHeaderComponent,
    SelectorPacienteComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  
})
export class ComponentsModule { }
