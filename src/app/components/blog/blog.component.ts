import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(public service: HttpService) {}
  @Input() blog!: Blog;
}
