import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private HttpClient: HttpClient) {}

  getComics(): Observable<any> {
    return this.HttpClient.get<any>('http://localhost:8000/comics');
  }

  getComicsById(id: number): Observable<any> {
    return this.HttpClient.get<any>('http://localhost:8000/comic/' + id);
  }
}
