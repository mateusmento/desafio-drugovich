import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientStatus } from 'src/app/model/client.model';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent {
  client = new FormGroup({
    name: new FormControl("", { nonNullable: true }),
    cnpj: new FormControl("", { nonNullable: true }),
    status: new FormControl<ClientStatus>("Ativo", { nonNullable: true }),
  })
}
