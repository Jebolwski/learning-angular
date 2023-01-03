import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute, public service: HttpService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '0';
    this.service.getABlog(this.id);
  }
}
