import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  fetchClients(): Observable<Client[]> {
    return new BehaviorSubject([
      {
        id: 1,
        name: 'Auto-Peças Joaquim LTDA.',
        cnpj: '000000000000000',
        status: 'Inativo',
      },
      {
        id: 2,
        name: 'Auto-Peças Carlinhos LTDA.',
        cnpj: '000000000000000',
        status: 'Ativo',
      },
      {
        id: 3,
        name: 'Auto-Peças João LTDA.',
        cnpj: '000000000000000',
        status: 'Ativo',
      },
      {
        id: 4,
        name: 'Auto-Peças Maria LTDA.',
        cnpj: '000000000000000',
        status: 'Ativo',
      },
    ]);
  }
}
