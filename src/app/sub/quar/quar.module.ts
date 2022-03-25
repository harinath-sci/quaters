import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuarRoutingModule } from './quar-routing.module';
import { QuarComponent } from './quar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { Quart1Component } from './quart1/quart1.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    QuarComponent,
    Quart1Component
  ],
  imports: [
    CommonModule,
    QuarRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class QuarModule { }
