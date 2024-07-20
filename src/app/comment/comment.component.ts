import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  protected readonly comments = signal<{ id: number }[]>([{id: 1}]);
}
