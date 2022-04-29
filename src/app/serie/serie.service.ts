import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Serie } from './serie';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

private apiUrl = environment.baseUrl + 'series.json';

constructor(private http: HttpClient) { }

getSeries(): Observable<Serie[]> {
  return this.http.get<Serie[]>(this.apiUrl);
}

}
