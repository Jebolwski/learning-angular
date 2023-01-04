import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/interfaces/movie';
import { Blog } from 'src/app/interfaces/blog';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ActionMovies: Movie[] = [];
  ComedyMovies: Movie[] = [];
  FightingMovies: Movie[] = [];
  blogs: Blog[] = [];
  singleblog!: Blog;
  darkMode!: number;

  private apiUrl: string =
    'https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json';

  private baseApiUrl: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getBlogs(): void {
    this.http
      .get<Blog[]>(this.baseApiUrl + 'blogs/all')
      .subscribe((res: any) => {
        this.blogs = res.msg;
      });
  }

  toggleDarkMode(): void {
    if (this.darkMode == 1) {
      this.darkMode = 0;
    } else {
      this.darkMode = 1;
    }
  }

  getABlog(id: string): void {
    this.http
      .get<Blog[]>(this.baseApiUrl + 'blogs/' + id)
      .subscribe((res: any) => {
        this.singleblog = res.msg;
      });
  }

  getMovies(): void {
    this.http.get<Movie[]>(this.apiUrl).subscribe((res: Movie[]) => {
      this.ActionMovies = res.slice(0, 50);
      this.ComedyMovies = res.slice(50, 70);
      this.FightingMovies = res.slice(70, 85);
    });
  }
}
