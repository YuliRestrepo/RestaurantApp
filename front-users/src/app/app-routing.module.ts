import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  // },
  // {
  //   path: 'favorites',
  //   loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesModule )
  // },
  // {
  //   path: 'reservations',
  //   loadChildren: () => import('./reservations/reservations.module').then( m => m.ReservationsModule )
  // },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
