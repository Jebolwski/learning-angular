import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../interfaces/movie/movie';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  movies: Movie[] = [];

  private apiUrl: string =
    'https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json';

  constructor(private http: HttpClient) {}

  getMovies(): void {
    this.http.get<Movie[]>(this.apiUrl).subscribe((res: Movie[]) => {
      this.movies = res.slice(0, 100);
    });
  }
}
