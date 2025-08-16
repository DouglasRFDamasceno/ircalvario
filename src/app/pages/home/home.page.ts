import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videoUrl: SafeResourceUrl;
  videoIds: string[] = [
    'b0KHUrlxEkk',
    'h8LRJQUWxdA',
    'Ak1VPHp-8p0',
    'VS6yng1DL2Y',
    'szZ_90Psy0k',
    'GL32ahb61f0',
    '4KSCcFkOoaI',
  ];

  showPlayer = false;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/b0KHUrlxEkk");
  }

  getSanitizedVideoUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1`
    );
  }

  getThumbnailUrl(id: string): string {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  openVideo(index: number) {
    this.videoUrl = this.getSanitizedVideoUrl(this.videoIds[index]);
    this.showPlayer = true;
  }

  closeVideo() {
    this.showPlayer = false;
    this.videoUrl = null as any;
  }
}
