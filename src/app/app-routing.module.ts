import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HwComponent } from './hw/hw.component';
import { Info1Component } from './personal/info/info1/info1.component';

const routes: Routes = [
  {
    path : "hw" , component : HwComponent
  },
  { path: 'sub/quar', loadChildren: () => import('./sub/quar/quar.module').then(m => m.QuarModule) },
  { path: 'sub1/vehic', loadChildren: () => import('./sub1/vehic/vehic.module').then(m => m.VehicModule) },
  { path: 'sub2/formsub', loadChildren: () => import('./sub2/formsub/formsub.module').then(m => m.FormsubModule) },
  { path: 'banka/detailsa', loadChildren: () => import('./banka/detailsa/detailsa.module').then(m => m.DetailsaModule) },
  { path: 'emp/datas', loadChildren: () => import('./emp/datas/datas.module').then(m => m.DatasModule) },
  { path: 'personal/info', loadChildren: () => import('./personal/info/info.module').then(m => m.InfoModule) },
  { path: 'college/details', loadChildren: () => import('./college/details/details.module').then(m => m.DetailsModule) },
  { path: 'upload/documents', loadChildren: () => import('./upload/documents/documents.module').then(m => m.DocumentsModule) },
  { path: 'edu/certi', loadChildren: () => import('./edu/certi/certi.module').then(m => m.CertiModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
