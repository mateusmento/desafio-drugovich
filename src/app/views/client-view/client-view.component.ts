import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientStatus } from 'src/app/model/client.model';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent {

  clientId?: number;

  client = new FormGroup({
    name: new FormControl("", { nonNullable: true }),
    cnpj: new FormControl("", { nonNullable: true }),
    status: new FormControl<ClientStatus>("Ativo", { nonNullable: true }),
  });

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params['id'];
      if (this.clientId) {
        this.clientService.fetchClient(this.clientId)
          .subscribe(client => this.client.patchValue(client));
      }
    });
  }

  saveClient() {
    this.clientService.createClient(this.client.getRawValue())
      .subscribe(res => this.client.setValue(res));
  }
}
