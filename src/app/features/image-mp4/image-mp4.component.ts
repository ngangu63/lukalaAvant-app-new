import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// media-item.model.ts
export interface MediaItem {
  type: 'image' | 'video' | 'audio';
  src: string;          // real media (mp4/mp3/image)
  placeholder?: string; // image shown before play
}

@Component({
  selector: 'app-image-mp4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-mp4.component.html',
  styleUrls: ['./image-mp4.component.css'],
})
export class ImageMp4Component {
  items: MediaItem[] = [
  
    {type: 'image', src: 'assets/plantation/abouture1.jpeg'},
    {type: 'image', src: 'assets/plantation/abouture2.jpeg'},
   
  /*   { type: 'audio', src: 'assets/audio1.mp3', placeholder: 'assets/audio-thumb.jpg' },
    { type: 'image', src: 'assets/img2.jpg' },
    { type: 'video', src: 'assets/video2.mp4', placeholder: 'assets/video-thumb2.jpg' },
    { type: 'image', src: 'assets/img3.jpg' }, */

   
    {type: 'image', src: 'assets/plantation/Tracteur1.jpeg'},
    {type: 'image', src: 'assets/plantation/Tracteur2.jpeg'},
/*     {type: 'image', src: 'assets/plantation/bouture1.jpeg' }, */
    {type: 'video', src: 'assets/mp3/bilanga12.mp4', placeholder: 'assets/plantation/bilanga12.jpg' },
    {type: 'video', src: 'assets/mp3/bilanga11.mp4', placeholder: 'assets/plantation/bilanga11.jpeg' },
    {type: 'video', src: 'assets/mp3/bouture1.mp4', placeholder: 'assets/plantation/bouture1.jpeg' },
    {type: 'image', src: 'assets/plantation/bouture2.jpeg' },

    {type: 'image', src: 'assets/plantation/bouture3.jpeg' },
    {type: 'image', src: 'assets/plantation/bouture4.jpeg' },
    {type: 'image', src: 'assets/plantation/bouture5.jpeg' },
    {type: 'image', src: 'assets/plantation/bouture6.jpeg' }, 
    
    {type: 'image', src: 'assets/plantation/bilanga1.jpeg' },
  
    {type: 'image', src: 'assets/plantation/bilanga3.jpeg' },
    {type: 'image', src: 'assets/plantation/bilanga4.jpeg' },
    {type: 'image', src: 'assets/plantation/bilanga5.jpeg' },
    {type: 'image', src: 'assets/plantation/bilanga6.jpeg' }, 
    {type: 'image', src: 'assets/plantation/bilanga7.jpeg' }, 
    {type: 'image', src: 'assets/plantation/bilanga8.jpeg' },
    {type: 'image', src: 'assets/plantation/bilanga9.jpeg' }, 
    {type: 'image', src: 'assets/plantation/bilanga10.jpeg'}, 
    
  ];

  visibleItems: MediaItem[] = [];
  playingIndex: number | null = null;

  currentIndex = 0;
  pageSize = 4;

  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.visibleItems = this.items.slice(
      this.currentIndex,
      this.currentIndex + this.pageSize
    );
    this.playingIndex = null;
  }

  next() {
    if (this.currentIndex + this.pageSize < this.items.length) {
      this.currentIndex += this.pageSize;
      this.updateView();
    }
  }

  prev() {
    if (this.currentIndex - this.pageSize >= 0) {
      this.currentIndex -= this.pageSize;
      this.updateView();
    }
  }

  playMedia(index: number) {
    this.playingIndex = index;
  }

  getRows() {
    const rows = [];
    for (let i = 0; i < this.visibleItems.length; i += 2) {
      rows.push(this.visibleItems.slice(i, i + 2));
    }
    return rows;
  }
}