import { Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { UneteComponent } from './home/unete/unete.component';
import { Error404Component } from './home/error404/error404.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },  
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'unete', component: UneteComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];
