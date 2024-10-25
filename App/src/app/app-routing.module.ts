import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product/list',
    pathMatch: 'full'
  },
  {
    path: 'user/login',
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user/create',
    loadChildren: () => import('./pages/user/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'user/profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'product/create',
    loadChildren: () => import('./pages/product/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'product/list',
    loadChildren: () => import('./pages/product/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'product/detail',
    loadChildren: () => import('./pages/product/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'order/list',
    loadChildren: () => import('./pages/order/list/list.module').then( m => m.ListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
