import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor(public service: HttpService) {}

  file!: any;

  ngOnInit(): void {
    this.service.getBlogs();
  }

  openFileUpload(): void {
    $('.file-upload').trigger('click');
  }

  removeBlogsFile(): void {
    $('.blogs-file').remove();
    this.file = null;
  }

  onChange(event: any): void {
    this.file = event.target.files[0];
    console.log('para messi', this.file, this.file.name);
    console.log(this.service.user.profile.id);
  }

  addBlog(data: { text: string; profile: number }): void {
    let formdata: FormData = new FormData();
    formdata.append('text', data.text);
    if (this.file) {
      formdata.append('file', this.file, this.file.name);
    }
    formdata.append('profile', this.service.user.profile.id);
    this.service.addABlog(formdata);
  }

  toggleAddBlog() {
    let div = document.querySelector('.add-blog-toggle');
    div?.classList.toggle('hidden');
  }
}
