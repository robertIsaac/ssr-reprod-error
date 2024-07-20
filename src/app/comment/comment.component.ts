import { Component, effect, input, signal } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  readonly id = input.required<number>();

  protected readonly comments = signal<{ id: number }[]>([]);

  constructor(private readonly commentService: CommentService) {
    effect(
      () => {
        this.getComments();
      },
      { allowSignalWrites: true },
    );
  }

  private getComments() {
    this.commentService.getComments(this.id()).subscribe((questionComments) => {
      this.comments.set(questionComments);
    });
  }
}
