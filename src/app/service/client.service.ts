import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable()
export class ClientService {
  private baseUrl = "https://63966e4a90ac47c68085cb9c.mockapi.io";

  constructor(private http: HttpClient) {}

  fetchClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + "/clients");
  }

  createClient(client: Client) {
    return this.http.post<Client>(this.baseUrl + "/clients", client);
  }
}
