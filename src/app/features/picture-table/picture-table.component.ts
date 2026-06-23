import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-picture-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-table.component.html',
  styleUrl: './picture-table.component.css',
})
export class PictureTableComponent {
  images: string[] = [
    'assets/plantation/abouture1.jpeg',
    'assets/plantation/abouture2.jpeg',
    'assets/plantation/Tracteur1.jpeg',
    'assets/plantation/Tracteur2.jpeg',
    'assets/plantation/bouture1.jpeg',
    'assets/plantation/bouture2.jpeg',
    'assets/plantation/bouture21.jpeg',
    'assets/plantation/bouture3.jpeg',
    'assets/plantation/bouture4.jpeg',
    'assets/plantation/bouture5.jpeg',
    'assets/plantation/bouture7.jpeg',
    'assets/plantation/bilanga1.jpeg',
    'assets/plantation/bilanga2.jpeg',
    'assets/plantation/bilanga3.jpeg',
    'assets/plantation/bilanga4.jpeg',
    'assets/plantation/bilanga5.jpeg',
    'assets/plantation/bilanga6.jpeg', 
    'assets/plantation/bilanga7.jpeg', 
    'assets/plantation/bilanga8.jpeg',
    'assets/plantation/bilanga9.jpeg', 
    'assets/plantation/bilanga10.jpeg', 
  ];

  currentIndex = 0;
  pageSize = 4;

  // 👇 Only 4 images visible at a time
  get visibleImages(): string[] {
    return this.images.slice(
      this.currentIndex,
      this.currentIndex + this.pageSize,
    );
  }

  // 👇 Split visible images into rows of 2
  get imageRows(): string[][] {
    const rows = [];
    const imgs = this.visibleImages;

    for (let i = 0; i < imgs.length; i += 2) {
      rows.push(imgs.slice(i, i + 2));
    }
    return rows;
  }

  next() {
    if (this.currentIndex + this.pageSize < this.images.length) {
      this.currentIndex += this.pageSize;
    }
  }

  prev() {
    if (this.currentIndex - this.pageSize >= 0) {
      this.currentIndex -= this.pageSize;
    }
  }
}
