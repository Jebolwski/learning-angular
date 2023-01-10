import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(public service: HttpService) {}

  file!: File;

  ngOnInit(): void {
    this.service.getBlogs();
  }

  onChange(event: any): void {
    this.file = event.target.files[0];
    console.log('para messi', this.file);
  }

  addBlog(data: { text: string; file: File; profile: number }): void {
    console.log(this.file);

    data['file'] = this.file;
    console.log(data);
    this.service.addABlog(data);
  }

  toggleAddBlog() {
    let div = document.querySelector('.add-blog-toggle');
    div?.classList.toggle('hidden');
  }
}
