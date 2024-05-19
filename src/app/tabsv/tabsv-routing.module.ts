import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsvPage } from './tabsv.page';

const routes: Routes = [
  {
    path: '',
    component: TabsvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsvPageRoutingModule {}
