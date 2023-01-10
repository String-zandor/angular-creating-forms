import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/book', pathMatch: 'full'},
  {path: 'book', loadChildren: () => import('./modules/book/book.module').then(mod => mod.BookModule)},
  {path: 'blog', loadChildren: ()=> import('./modules/blog/blog.module').then(mod => mod.BlogModule)},
  {path: 'profile', loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
