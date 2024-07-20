import { Component, effect, input, numberAttribute, signal } from '@angular/core';
import { QuestionService } from '../question.service';
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
  protected readonly questionId = input.required({
    transform: numberAttribute,
  });

  protected readonly question = signal<{id: number} | undefined>(
    undefined,
  );

  constructor(private readonly questionService: QuestionService) {
    effect(
      () => {
        this.refreshQuestion();
      },
      { allowSignalWrites: true },
    );
  }

  protected refreshQuestion(): void {
    this.questionService
      .getQuestion(this.questionId())
      .subscribe((question) => {
        this.question.set(question);
      });
  }

}
