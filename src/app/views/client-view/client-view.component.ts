import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent {
  client = new FormGroup({
    name: new FormControl(""),
    cnpj: new FormControl(""),
    status: new FormControl("Ativo"),
  })
}
