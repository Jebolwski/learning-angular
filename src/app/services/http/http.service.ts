import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/interfaces/movie';
import { Blog } from 'src/app/interfaces/blog';
import { Profile } from 'src/app/interfaces/profile';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
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
  user!: any;

  private apiUrl: string =
    'https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json';

  private baseApiUrl: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient, private router: Router) {}

  getBlogs(): void {
    this.http
      .get<Blog[]>(this.baseApiUrl + 'blogs/all')
      .subscribe((res: any) => {
        this.blogs = res.msg;
      });
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

  addABlog(data: { text: string; file: File; profile: number }): void {
    data['profile'] = this.user.profile.id;
    this.http
      .post(this.baseApiUrl + 'blogs/add', data)
      .subscribe((res: any) => {
        this.getBlogs();
      });
  }

  getMovies(): void {
    this.http.get<Movie[]>(this.apiUrl).subscribe((res: Movie[]) => {
      this.ActionMovies = res.slice(0, 50);
      this.ComedyMovies = res.slice(50, 70);
      this.FightingMovies = res.slice(70, 85);
    });
  }

  getProfile(id: number): void {
    console.log('ÇEK PRFİLİ');

    this.http
      .get<Profile>(this.baseApiUrl + 'profile/' + id)
      .subscribe((res: any) => {
        console.log(res);
        this.profile = res.msg;
      });
  }

  loginUser(data: { username: string; password: string }): void {
    this.http.post<any>(this.baseApiUrl + 'token', data).subscribe((res) => {
      this.user = jwtDecode(res.access);
      localStorage.setItem('authTokens', JSON.stringify(res));
      this.router.navigate(['/']);
    });
  }

  logoutUser(): void {
    console.log('messi');
    this.user = null;
    localStorage.removeItem('authTokens');
  }
}
