import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }

  edit(id: number): void {
    console.log(`Book with id=${id} for editing...`);
  }

  delete(id: number): void {
    console.log(`Book with id=${id} for deletion...`);
  }

}
