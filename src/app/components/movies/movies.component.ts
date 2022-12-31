import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../interfaces/movie/movie';
import { HttpService } from 'src/app/services/http/http.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private http: HttpClient, public service: HttpService) {}

  ngOnInit(): void {
    this.service.getMovies();
  }
}
