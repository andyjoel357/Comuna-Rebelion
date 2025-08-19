import { Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { UneteComponent } from './home/unete/unete.component';
import { Error404Component } from './home/error404/error404.component';


export const routes: Routes = [
  {path:'Inicio', component:InicioComponent },
  {path:'Nosotros', component:NosotrosComponent},
  {path:'Unete', component:UneteComponent},

  {path:'', redirectTo:'Inicio', pathMatch:'full'},
  {path:'**', component:Error404Component}
];
