import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogs = this.blogService.getBlogs();
  }

  edit(id: number):void {
    console.log(`Blog with id=${id} for editing...`)
  }

  delete(id: number) {
    console.log(`Blog with id=${id} for deletion...`)
  }

}
