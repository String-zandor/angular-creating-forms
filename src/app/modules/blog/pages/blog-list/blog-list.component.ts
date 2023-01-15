import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogs = this.blogService.getBlogs();
  }

  edit(id: number):void {
    this.router.navigate(['form', id], { relativeTo: this.route });
  }

  delete(id: number): void {
    console.log(`Blog with id=${id} for deletion...`)
  }

  add(): void {
    this.router.navigate(['form'], { relativeTo: this.route });
  }

  deleteAll(): void {
    console.log('Deleting all blogs...')
  }

}
