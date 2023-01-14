import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteBlogComponent } from './components/delete-blog/delete-blog.component';
import { FormsModule } from '@angular/forms';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'blog/:id/delete', component: DeleteBlogComponent },
  { path: 'blog/:id/update', component: UpdateBlogComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
