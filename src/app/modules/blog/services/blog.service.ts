import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { BLOGS } from '../mock-blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogs(): Blog[] {
    return BLOGS;
  }
}
