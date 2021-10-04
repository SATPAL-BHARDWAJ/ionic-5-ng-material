import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmDialogPage } from './confirm-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmDialogPageRoutingModule {}
