import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicRoutingModule } from './vehic-routing.module';
import { VehicComponent } from './vehic.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { VehicFormComponent } from './vehic-form/vehic-form.component';
@NgModule({
  declarations: [
    VehicComponent,
    VehicFormComponent
  ],
  imports: [
    CommonModule,
    VehicRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class VehicModule { }
