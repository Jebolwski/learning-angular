import { Component, Renderer2, OnInit } from '@angular/core';
import { HttpService } from './services/http/http.service';
import jwtDecode from 'jwt-decode';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  constructor(private renderer: Renderer2, public service: HttpService) {
    this.renderer.listen('window', 'scroll', () => {
      if (window.scrollY > 100) {
        document.querySelector('.up-button')?.classList.remove('hidden');
        document.querySelector('.up-button')?.classList.add('flex');
      } else {
        document.querySelector('.up-button')?.classList.add('hidden');
        document.querySelector('.up-button')?.classList.remove('flex');
      }
    });
    this.renderer.listen('window', 'resize', () => {
      if (window.innerWidth > 766) {
        $('.mobile-sidebar').hide(300);
      }
    });
  }

  ngOnInit(): void {
    let theme = localStorage.getItem('theme');
    this.service.setDarkMode(theme!);
    if (localStorage.getItem('authTokens')) {
      this.service.user = jwtDecode(localStorage.getItem('authTokens') || '');
    }

    if (localStorage.getItem('authTokens')) {
      this.service.updateToken();
    }

    if (
      this.service.user &&
      this.service.authTokens &&
      localStorage.getItem('authTokens')
    ) {
      let interval: any = setInterval(() => {
        this.service.updateToken();
        console.log('YENİLENDİ');
      }, 1000 * 60 * 4);
    }
  }
}
