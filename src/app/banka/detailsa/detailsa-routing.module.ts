import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsaComponent } from './detailsa.component';

const routes: Routes = [{ path: '', component: DetailsaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsaRoutingModule { }
