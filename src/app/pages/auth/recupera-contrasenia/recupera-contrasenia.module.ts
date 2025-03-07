import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaContraseniaPageRoutingModule } from './recupera-contrasenia-routing.module';

import { RecuperaContraseniaPage } from './recupera-contrasenia.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaContraseniaPageRoutingModule,
    SharedModule
  ],
  declarations: [RecuperaContraseniaPage]
})
export class RecuperaContraseniaPageModule {}
