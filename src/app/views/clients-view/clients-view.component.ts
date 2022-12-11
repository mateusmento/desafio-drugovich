import { Component } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-clients-view',
  templateUrl: './clients-view.component.html',
  styleUrls: ['./clients-view.component.scss']
})
export class ClientsViewComponent {

  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.fetchClients()
      .subscribe((res) => this.clients = res);
  }
}
