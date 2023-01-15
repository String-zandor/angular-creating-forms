import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  status: string = 'NEW';
  blogForEdit?: Blog;
  blogForm: FormGroup = this.fb.group({
    id: [0],
    title: [''],
    description: [''],
    author: [''],
    comments: this.fb.array([''])
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private blogService: BlogService) {  }

  ngOnInit(): void {
    let idForEdit: number = Number(this.route.snapshot.paramMap.get('id'));
    if(idForEdit) {
      this.blogForEdit = this.blogService.getBlogs().find(blog => blog.id === idForEdit);
      if(this.blogForEdit) {
        this.updateForm(this.blogForEdit);
        this.status = 'EDIT';
      }
    }
  }

  updateForm(blog: Blog): void {
    this.blogForm.get('id')?.setValue(blog.id);
    this.blogForm.get('title')?.setValue(blog.title);
    this.blogForm.get('description')?.setValue(blog.description);
    this.blogForm.get('author')?.setValue(blog.author);
    this.comments.clear();
    for (let comment of blog.comments) {
      this.comments.push(this.fb.control(comment));
    }
  }

  get comments(): FormArray {
    return this.blogForm.get('comments') as FormArray;
  }

  addComment(): void {
    this.comments.push(this.fb.control(''));
  }

  deleteComment(i: number): void {
    this.comments.removeAt(i);
  }

  clear(): void {
    this.blogForm.reset();
  }

  onSubmit(): void {
    console.log(this.blogForm.value);
  }

}
