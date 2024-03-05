import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  {
    path:'localstorage',
    component:LocalStorageComponent
  },
  {
    path:'sessionstorage',
    component:SessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
