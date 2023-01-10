import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() blog?: Blog;

  @Output() edit = new EventEmitter();

  @Output() delete = new EventEmitter();

  requestEdit(): void {
    if(this.blog) {
      this.edit.emit(this.blog.id);
    }
  }

  requestDelete(): void {
    if(this.blog) {
      this.delete.emit(this.blog.id);
    }
  }

}
