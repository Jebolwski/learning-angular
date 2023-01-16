import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import * as $ from 'jquery';

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
    if (parseInt(this.id) > 0) {
      this.service.getProfile(parseInt(this.id));
      console.log(this.service.profile);
    }
  }

  toggleBigProfilePicture(): void {
    $('.big-profile-picture').fadeToggle(200);
  }
}
