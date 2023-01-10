import { Injectable, OnInit } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks(): Book[] {
    return BOOKS;
  }

}
