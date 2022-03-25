import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicComponent } from './vehic.component';

const routes: Routes = [{ path: '', component: VehicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicRoutingModule { }
