import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsaRoutingModule } from './detailsa-routing.module';
import { DetailsaComponent } from './detailsa.component';


@NgModule({
  declarations: [
    DetailsaComponent
  ],
  imports: [
    CommonModule,
    DetailsaRoutingModule
  ]
})
export class DetailsaModule { }
