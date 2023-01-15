import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';

const routes: Routes = [
  {path: 'form/:id', component: BlogFormComponent},
  {path: 'form', component: BlogFormComponent},
  {path: '', component: BlogListComponent} 
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
