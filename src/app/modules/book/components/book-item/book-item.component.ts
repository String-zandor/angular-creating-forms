import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book?: Book;

  @Output() edit = new EventEmitter();

  @Output() delete = new EventEmitter();

  requestEdit(): void {
    if(this.book) {
      this.edit.emit(this.book.id);
    }
  }

  requestDelete(): void {
    if(this.book) {
      this.delete.emit(this.book.id);
    }
  }

}
