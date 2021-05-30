import { Injectable } from '@angular/core';
import { Busca } from './busca';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 

  /** GET busca by name. Will 404 if id not found */
  getBusca(login: string): Observable<Busca> {
    const url = `${this.buscaUrl}/${login}`;
    return this.http.get<Busca>(url)
  }

  private buscaUrl = 'https://api.github.com/users';  // URL to web api
}
