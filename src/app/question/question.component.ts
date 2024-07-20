import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommentComponent,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
}
