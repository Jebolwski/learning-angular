import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss'],
})
export class UpdateBlogComponent implements OnInit {
  constructor(public service: HttpService, private router: ActivatedRoute) {}

  file!: any;
  id!: string;
  removefile: string = 'false';

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || '0';
    this.service.getABlog(this.id);
  }

  onChange(event: any): void {
    this.file = event.target.files[0];
    this.removefile = 'false';
  }

  removeBlogsFile(): void {
    this.removefile = 'true';
    $('.blogs-file').remove();
    this.file = null;
  }

  openFileUpload(): void {
    $('.file-upload').trigger('click');
  }

  updateBlog(data: { text: string; profile: number }): void {
    console.log(this.removefile);

    let formdata = new FormData();
    formdata.append('removefile', this.removefile);
    formdata.append('text', data.text);
    if (this.file) {
      formdata.append('file', this.file, this.file.name);
    }
    formdata.append('profile', this.service.user.profile.id1);
    this.service.updateABlog(parseInt(this.id), formdata);
  }
}
