import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormsubRoutingModule } from './formsub-routing.module';
import { FormsubComponent } from './formsub.component';


@NgModule({
  declarations: [
    FormsubComponent
  ],
  imports: [
    CommonModule,
    FormsubRoutingModule,
    MatCardModule
  ]
})
export class FormsubModule { }
