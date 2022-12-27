# My First Blog Post

## This one is about...

---

`inject()`.

#### my file

```
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  #blogService = inject(BlogService);
  blogList: any;

  // constructor(private blogService: BlogService) {};

  ngOnInit() {
    this.blogList = this.#blogService.getBlogList();
    // this.blogService.getBlogList();
  }
}
```