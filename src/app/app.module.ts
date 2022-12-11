import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsViewComponent } from './views/clients-view/clients-view.component';
import { HttpClientModule } from "@angular/common/http";
import { ClientService } from './service/client.service';
import { ClientViewComponent } from './views/client-view/client-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsViewComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
