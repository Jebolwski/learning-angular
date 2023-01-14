import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.scss'],
})
export class DeleteBlogComponent implements OnInit {
  id!: string;

  constructor(
    private route: ActivatedRoute,
    public service: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '0';
    this.service.getABlog(this.id);
    console.log(this.service.singleblog);
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }
}
