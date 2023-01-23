import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteBlogComponent } from './components/delete-blog/delete-blog.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {
  provideTippyConfig,
  tooltipVariation,
  popperVariation,
} from '@ngneat/helipopper';
@Pipe({
  name: 'timeAgo',
  pure: false,
})
export class TimeAgoExtendsPipe extends TimeAgoPipe {}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    BlogsComponent,
    TimeAgoExtendsPipe,
    BlogDetailComponent,
    ProfileComponent,
    LoginComponent,
    DeleteBlogComponent,
    UpdateBlogComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [
    provideTippyConfig({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
