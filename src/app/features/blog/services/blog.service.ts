import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  #http = inject(HttpClient);
  
  getBlogList(): any {
    const blogList = [
      {
        title: 'Create blog posts in your Angular app with Markdown',
        filename: 'Create-blog-posts-in-your-Angular-app-with-Markdown',
        dateCreated: '2022-12-14',
        author: 'Steve Witman',
        dateRevised: '',
        tags: ['testTag1', 'Another Tag'],
      }
    ]
    return blogList;
  }

  getBlog(filename: string): any {
    return this.#http.get(`./assets/${filename}.md`, { responseType: 'text' });
  }

  parseMarkdown(md$: Observable<string>): Observable<string> {
    const marked = require('marked');
    return md$.pipe(
      map((data: string) => {
        return marked.parse(data)
      })
    )
  }

}








