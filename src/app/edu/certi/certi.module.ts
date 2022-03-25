import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertiRoutingModule } from './certi-routing.module';
import { CertiComponent } from './certi.component';
@NgModule({
  declarations: [
    CertiComponent
  ],
  imports: [
    CommonModule,
    CertiRoutingModule,
  ]
})
export class CertiModule { }
