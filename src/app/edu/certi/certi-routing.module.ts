import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertiComponent } from './certi.component';

const routes: Routes = [{ path: '', component: CertiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertiRoutingModule { }
