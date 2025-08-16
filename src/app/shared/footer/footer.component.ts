import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  openYoutube() {
    window.open('https://www.youtube.com/@igrejadocalvariosrs', '_blank');
  }

  openFacebook() {
    window.open('https://www.facebook.com/igrejadocalvariosrs', '_blank');
  }

  openInstagram() {
    window.open('https://www.instagram.com/igrejadocalvariosrs', '_blank');
  }
}
