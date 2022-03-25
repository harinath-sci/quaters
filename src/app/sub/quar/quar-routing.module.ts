import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuarComponent } from './quar.component';

const routes: Routes = [{ path: '', component: QuarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuarRoutingModule { }
