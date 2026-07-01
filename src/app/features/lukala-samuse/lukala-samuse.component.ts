import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MediaItem {
  type: 'image' | 'video' | 'audio';
  src: string;          // real media (mp4/mp3/image)
  placeholder?: string; // image shown before play
}



@Component({
  selector: 'app-lukala-samuse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lukala-samuse.component.html',
  styleUrl: './lukala-samuse.component.css'
})
export class LukalaSamuseComponent {

items: MediaItem[] = [
  
   {type: 'video', src: 'assets/mp3/DedeAniversaire2026.mp4', placeholder: 'assets/images/DedeAniversaire2026.jpg'},
  
    
   
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


