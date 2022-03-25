import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsubComponent } from './formsub.component';

const routes: Routes = [{ path: '', component: FormsubComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsubRoutingModule { }
