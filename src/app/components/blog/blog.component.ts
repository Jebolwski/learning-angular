import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @Input() blog!: Blog;
}
