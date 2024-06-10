import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

// Modulo personalizado donde se exporta los modulos de PrimeNG.
// MenuModule se deja como ejemplo.
@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    //MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule

  ]
})
export class PrimeNgModule { }
