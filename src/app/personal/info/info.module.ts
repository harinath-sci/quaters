import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { Info1Component } from './info1/info1.component';

@NgModule({
  declarations: [
    InfoComponent,
    Info1Component
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class InfoModule { }
