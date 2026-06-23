import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-mp4-player',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './mp4-player.component.html',
  styleUrl: './mp4-player.component.css'
})
export class Mp4PlayerComponent implements OnInit{
  @Input() fileSource: string = ''; // Input for the file source
  @Input() fileType: 'mp3' | 'mp4' = 'mp3'; // Input for file type (mp3 or mp4)

  player!: Howl;
  isPlaying: boolean = false;
  isVideo: boolean = false;

  ngOnInit(): void {
    this.isVideo = this.fileType === 'mp4'; // Check if the file is an MP4
    if (!this.isVideo) {
      this.initializePlayer();
    }
  }

  initializePlayer() {
    if (!this.fileSource) return;

    this.player = new Howl({
      src: [this.fileSource],
      html5: true, // Ensures compatibility with mobile browsers
      onplay: () => (this.isPlaying = true),
      onpause: () => (this.isPlaying = false),
      onend: () => (this.isPlaying = false)
    });
  }

  play() {
    if (this.isVideo) {
      const videoElement = document.getElementById('video-player') as HTMLVideoElement;
      if (videoElement) {
        videoElement.play();
        this.isPlaying = true;
      }
    } else {
      this.player?.play();
    }
  }

  pause() {
    if (this.isVideo) {
      const videoElement = document.getElementById('video-player') as HTMLVideoElement;
      if (videoElement) {
        videoElement.pause();
        this.isPlaying = false;
      }
    } else {
      this.player?.pause();
    }
  }

  stop() {
    if (this.isVideo) {
      const videoElement = document.getElementById('video-player') as HTMLVideoElement;
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; // Reset playback
        this.isPlaying = false;
      }
    } else {
      this.player?.stop();
      this.isPlaying = false;
    }
  }
}

