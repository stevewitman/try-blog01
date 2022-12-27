import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../services/blog.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent {
  #blogService = inject(BlogService);
  blogMD$: Observable<string> = of('');
  blogHTML$: Observable<string> = of('');

  ngOnInit() {
    this.blogMD$ = this.#blogService.getBlog('First_Blog_Post');
    this.blogHTML$ = this.#blogService.parseMarkdown(this.blogMD$);
  }
}
