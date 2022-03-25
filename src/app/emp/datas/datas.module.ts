import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { DatasRoutingModule } from './datas-routing.module';
import { DatasComponent } from './datas.component';
import { Datas2Component } from './datas2/datas2.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DatasComponent,
    Datas2Component
  ],
  imports: [
    CommonModule,
    DatasRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class DatasModule { }
