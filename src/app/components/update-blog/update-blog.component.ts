import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import * as $ from 'jquery';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Blog } from 'src/app/interfaces/blog';
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
  updateblogform!: FormGroup;
  blog!: Blog;
  async ngOnInit(): Promise<void> {
    this.id = this.router.snapshot.paramMap.get('id') || '0';
    await this.service.getABlog(this.id);
    this.updateblogform = new FormGroup({
      text: new FormControl(this.service?.singleblog?.text, [
        Validators.required,
        Validators.maxLength(240),
        Validators.minLength(3),
      ]),
    });
  }

  get text() {
    return this.updateblogform.get('text');
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

  updateBlog(data: { text: string }): void {
    let formdata = new FormData();
    formdata.append('removefile', this.removefile);
    formdata.append('language', 'en');
    formdata.append('text', data.text);
    formdata.append('profile', this.service?.user?.profile.id);
    if (this.file) {
      formdata.append('file', this.file, this.file.name);
    }
    this.service.updateABlog(parseInt(this.id), formdata);
  }
}
