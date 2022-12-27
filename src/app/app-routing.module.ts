import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog-list/blog-list.component').then(mod => mod.BlogListComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./features/blog/blog-detail/blog-detail.component').then(mod => mod.BlogDetailComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
