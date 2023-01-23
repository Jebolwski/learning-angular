import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public service: HttpService) {}

  toggleProfileDiv() {
    $('.profile-toggle-div').fadeToggle(400);
  }

  toggleProfileDiv2() {
    $('.profile-toggle-div-2').fadeToggle(400);
  }
}
