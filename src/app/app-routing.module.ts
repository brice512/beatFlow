import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { TabsvPage } from './tabsv/tabsv.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'video/home',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
    ],
  },
  {
    path: 'video',
    component: TabsvPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'video',
      },
      {
        path: 'video',
        loadChildren: () =>
          import('./video/video.module').then((m) => m.VideoPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
