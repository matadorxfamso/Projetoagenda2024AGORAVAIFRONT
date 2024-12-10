import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agendas } from './agenda';
@Injectable({
  providedIn: 'root'
})
export class agendasService {

  url='http://localhost:8080/agenda';

  constructor(private http: HttpClient) { }

  getagendas(): Observable<agendas []>{
    return this.http.get<agendas []>(this.url);
  }
  delete(agenda: agendas): Observable<void>{
    return this.http.delete<void>(`${this.url}/${agenda.id}`);
  }
  save(agenda: agendas): Observable<agendas>{
    return this.http.post<agendas>(this.url, agenda);
  }
}
