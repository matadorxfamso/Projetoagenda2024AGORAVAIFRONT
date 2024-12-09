import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agendas } from './agenda';
@Injectable({
  providedIn: 'root'
})
export class agendasService {
  constructor(private http: HttpClient) { }
  getagendas(): Observable<agendas []>{
    return this.http.get<agendas []>('http://localhost:3000/agenda')
  }
}
