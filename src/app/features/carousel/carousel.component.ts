import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  images = [
    'assets/plantation/abouture1.jpeg',
    'assets/plantation/abouture2.jpeg',
    'assets/plantation/Tracteur1.jpeg',
    'assets/plantation/Tracteur2.jpeg',
    'assets/plantation/bouture1.jpeg',
    'assets/plantation/bouture2.jpeg',
    'assets/plantation/bouture3.jpeg',
    'assets/plantation/bouture4.jpeg',
    'assets/plantation/bouture5.jpeg',
    'assets/plantation/bouture6.jpeg',
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
