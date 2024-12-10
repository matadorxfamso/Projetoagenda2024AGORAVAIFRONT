import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';



const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'agenda/:id', component:  AgendaFormComponent},
  {path: 'agenda-form', component: AgendaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
