import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private readonly httpClient: HttpClient) { }

  getQuestion(id: number): Observable<{id: number}> {
    return this.httpClient.get<{id: number}>(
      `${environment.apiUrl}question/${id}.json`,
    );
  }
}
