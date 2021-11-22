import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'dash',
        loadChildren: () => import('../dash/dash.module').then( m => m.DashModule )
      },
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then( m => m.MenuModule )
      },
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then( m => m.OrdersModule )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dash',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
