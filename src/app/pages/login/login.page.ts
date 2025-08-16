import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  teste() {
    console.log("teste")
  }

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
