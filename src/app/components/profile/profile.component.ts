import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  id!: string;

  constructor(private route: ActivatedRoute, public service: HttpService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '0';
    if (this.id !== '0') {
      this.service.getProfile(this.id);
    }
  }
}