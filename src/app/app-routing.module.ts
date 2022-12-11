import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientViewComponent } from './views/client-view/client-view.component';
import { ClientsViewComponent } from './views/clients-view/clients-view.component';

const routes: Routes = [
  { path: "", redirectTo: "clientes", pathMatch: "full" },
  { path: "clientes", component: ClientsViewComponent },
  { path: "cliente", component: ClientViewComponent },
  { path: "cliente/:id", component: ClientViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
