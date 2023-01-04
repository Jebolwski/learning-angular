import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  constructor(private renderer: Renderer2) {
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

  upScroll(): void {}
}
