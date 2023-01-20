import { Component, Renderer2, OnInit } from '@angular/core';
import { HttpService } from './services/http/http.service';
import jwtDecode from 'jwt-decode';
declare var $: any;
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
  }

  ngOnInit(): void {
    let theme = localStorage.getItem('theme');
    this.service.setDarkMode(theme!);
    if (localStorage.getItem('authTokens')) {
      this.service.user = jwtDecode(localStorage.getItem('authTokens') || '');
    }
    if (this.service.user) {
      setTimeout(() => {
        this.service.updateToken();
      }, 1000 * 60 * 4);
    }
  }
}
