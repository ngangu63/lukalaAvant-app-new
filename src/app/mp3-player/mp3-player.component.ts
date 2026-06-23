import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Howl } from 'howler';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mp3-player',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  templateUrl: './mp3-player.component.html',
  styleUrl: './mp3-player.component.css'
})
export class Mp3PlayerComponent {
  player!: Howl;
  isPlaying: boolean = false;
  emoji: string = "😭";

  initializePlayer() {
    this.player = new Howl({
      src: ['assets/mp3/HOMMAGE_A_NOS_MORTS.mp3'], // Path to your MP3 file
      html5: true, // Ensures playback works on mobile
      onplay: () => {
        this.isPlaying = true;
      },
      onpause: () => {
        this.isPlaying = false;
      },
      onend: () => {
        this.isPlaying = false;
      }
    });
  }

  play() {
    if (!this.player) {
      this.initializePlayer();
    }
    this.player.play();
  }

  pause() {
    if (this.player) {
      this.player.pause();
    }
  }

  stop() {
    if (this.player) {
      this.player.stop();
      this.isPlaying = false;
    }
  }
}