import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from 'src/app/interfaces/movie';
import { Blog } from 'src/app/interfaces/blog';
import { Profile } from 'src/app/interfaces/profile';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { User } from 'src/app/interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ActionMovies: Movie[] = [];
  ComedyMovies: Movie[] = [];
  FightingMovies: Movie[] = [];
  blogs: Blog[] = [];
  profile!: Profile;
  userProfile!: Profile;
  singleblog!: Blog;
  darkMode: string = 'false';
  user: any = localStorage.getItem('authTokens')
    ? jwtDecode(JSON.parse(localStorage.getItem('authTokens') || '{}').access)
    : null;
  authTokens: any = localStorage.getItem('authTokens')
    ? JSON.parse(localStorage.getItem('authTokens') || '{}')
    : null;
  private apiUrl: string =
    'https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json';

  private baseApiUrl: string = 'http://127.0.0.1:8000/api/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  getBlogs(): void {
    this.http
      .get<Blog[]>(this.baseApiUrl + 'blogs/all')
      .subscribe((res: any) => {
        this.blogs = res.msg;
      });
  }

  youNeedToLogin(): void {
    this.toastr.info(`You need to login in order to do this. 😢`);
  }

  toggleDarkMode(): void {
    if (this.darkMode == 'true') {
      this.darkMode = 'false';
      localStorage.setItem('theme', 'false');
    } else {
      this.darkMode = 'true';
      localStorage.setItem('theme', 'true');
    }
  }

  setDarkMode(mode: string): void {
    this.darkMode = mode;
  }

  getABlog(id: string): void {
    this.http
      .get<Blog[]>(this.baseApiUrl + 'blogs/' + id)
      .subscribe((res: any) => {
        this.singleblog = res.msg;
      });
  }

  addABlog(data: FormData): void {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.authTokens.access}`,
    });

    this.http
      .post(this.baseApiUrl + 'blogs/add', data, { headers: headers })
      .subscribe((res: any) => {
        this.getBlogs();
        this.toastr.success(res['success_msg']);
      });
  }

  deleteABlog(id: number): void {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.authTokens.access}`,
    });
    this.http
      .delete(this.baseApiUrl + 'blogs/' + id + '/en/delete', {
        headers: headers,
      })
      .subscribe((res: any) => {
        this.toastr.success(res['msg']);
        this.router.navigate(['/']);
      });
  }

  updateABlog(id: number, data: FormData) {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.authTokens.access}`,
    });
    this.http
      .put(this.baseApiUrl + 'blogs/' + id + '/edit', data, {
        headers: headers,
      })
      .subscribe((res: any) => {
        this.toastr.success(res['success_msg']);
      });
  }

  getMovies(): void {
    this.http.get<Movie[]>(this.apiUrl).subscribe((res: Movie[]) => {
      this.ActionMovies = res.slice(0, 50);
      this.ComedyMovies = res.slice(50, 70);
      this.FightingMovies = res.slice(70, 85);
    });
  }

  toggleMobileSidebar(): void {
    $('.mobile-sidebar').toggle(300);
  }

  getProfile(id: number): void {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.authTokens.access}`,
    });
    this.http
      .get<Profile>(this.baseApiUrl + 'profile/' + id, { headers: headers })
      .subscribe((res: any) => {
        this.profile = res.msg;
      });
  }

  toggleBlogLike(id: number): void {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${this.authTokens.access}`,
    });
    this.http
      .post(
        this.baseApiUrl + 'blogs/' + id + '/toggle-like',
        {
          id: this.user.profile.user.id,
        },
        { headers: headers }
      )
      .subscribe((res: any) => {
        let this_blog = this.blogs.find((blog) => id === blog.id);
        let index: number = this.blogs.indexOf(this_blog!);
        this.blogs[index] = res.blog_data;
      });
  }

  loginUser(data: any): void {
    console.log(data);
    this.http.post<any>(this.baseApiUrl + 'token', data).subscribe(
      (res) => {
        this.user = jwtDecode(res.access);
        localStorage.setItem('authTokens', JSON.stringify(res));
        this.authTokens = res;
        this.router.navigate(['/']);
      },
      (res) => {
        this.toastr.error(res.error.detail);
      },
      () => {
        console.log('completed');
      }
    );
  }

  updateToken(): void {
    if (this.authTokens) {
      this.http
        .post(this.baseApiUrl + 'token/refresh', {
          refresh: this.authTokens?.refresh,
        })
        .subscribe((res: any) => {
          this.authTokens = res;
          let data: any = jwtDecode(res.access);
          this.user = data.profile;
          localStorage.setItem('authTokens', JSON.stringify(res));
        });
    }
  }

  logoutUser(): void {
    this.user = null;
    this.authTokens = null;
    localStorage.removeItem('authTokens');
  }
}
