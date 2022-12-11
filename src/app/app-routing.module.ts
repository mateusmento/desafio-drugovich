import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsViewComponent } from './views/clients-view/clients-view.component';

const routes: Routes = [
  { path: "", redirectTo: "clients", pathMatch: "full" },
  { path: "clients", component: ClientsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
