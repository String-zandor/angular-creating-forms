import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }

  edit(id: number): void {
    this.router.navigate(['form', id], {relativeTo: this.route});
  }

  delete(id: number): void {
    console.log(`Book with id=${id} for deletion...`);
  }

  add(): void {
    this.router.navigate(['form'], {relativeTo: this.route});
  }

  deleteAll(): void {
    console.log('Deleting all books...');
  }

}
