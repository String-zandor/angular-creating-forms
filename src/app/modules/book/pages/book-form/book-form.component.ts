import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit{
  status: string = 'NEW';
  bookForEdit?: Book;
  bookForm: FormGroup = this.fb.group({
    id: [0],
    name: [''],
    authors: this.fb.array(['']),
    isbn: ['']
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookService) {   }

  ngOnInit(): void {
    let idForEdit: number = Number(this.route.snapshot.paramMap.get('id'));
    if(idForEdit) {
      this.bookForEdit = this.bookService.getBooks().find(book => book.id === idForEdit);
      if(this.bookForEdit) {
        this.updateForm(this.bookForEdit);
        this.status = 'EDIT';
      }
    } 
  }

  updateForm(book: Book) {
    this.bookForm.get('id')?.setValue(book.id);
    this.bookForm.get('name')?.setValue(book.name);
    this.authors.clear();
    for (let author of book.authors) {
      this.authors.push(this.fb.control(author));
    }
    this.bookForm.get('isbn')?.setValue(book.isbn);
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  addAuthor(): void {
    this.authors.push(this.fb.control(''));
  }

  deleteAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  onSubmit(): void {
    console.log(this.bookForm.value);
  }

  clear(): void {
    this.bookForm.reset();
  }

}
