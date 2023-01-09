import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(public service: HttpService) {}

  ngOnInit(): void {
    this.service.getBlogs();
  }

  toggleAddBlog() {
    let div = document.querySelector('.add-blog-toggle');
    div?.classList.toggle('hidden');
  }
}
