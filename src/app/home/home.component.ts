import { Component } from '@angular/core';
import { Mp3PlayerComponent } from "../mp3-player/mp3-player.component";
import { Mp4PlayerComponent } from "../mp4-player/mp4-player.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Mp3PlayerComponent, Mp4PlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
