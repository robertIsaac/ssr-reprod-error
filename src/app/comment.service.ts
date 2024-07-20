import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  getComments(id: number): Observable<{ id: number }[]> {
    return of([{
        "id": 1
      }]
    )
  }
}
