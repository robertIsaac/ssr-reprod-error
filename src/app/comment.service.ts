import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private readonly httpClient: HttpClient) {}

  getComments(id: number): Observable<{ id: number }[]> {
    const url = `${environment.apiUrl}comment/${id}.json`;
    return this.httpClient.get<{ id: number }[]>(url).pipe(delay(500));
  }
}
