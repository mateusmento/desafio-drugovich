import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  fetchClients() {
    return this.http.get<Client[]>('https://demo4231135.mockable.io/');
  }
}
