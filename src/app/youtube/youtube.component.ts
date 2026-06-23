import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BigPictureService } from '../big-picture.service';


enum Gender {
  female = 0,
  male = 1,
}

interface BigPicture {
  name: string;
  role: string;
  location: string;
  imageUrl: string;
  gender: Gender;
  defaultImage: string;
}

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  names: BigPicture[] = [];
  videoId: string | null = '';
  videoUrl: string = '';
  sanitizedUrl: SafeResourceUrl | null = null;
  index: number = 0;

  myBoolean: boolean = true;

  currentName1: BigPicture | null = null;
  htmlName1: String = "";

  currentName2: BigPicture | null = null;
  htmlName2: String = "";

  currentName3: BigPicture | null = null;
  htmlName3: String = "";

  currentName4: BigPicture | null = null;
  htmlName4: String = "";

  currentColor1: string = 'blue';
  currentColor2: string = 'green';
  currentColor3: string = 'rose';
  currentColor4: string = 'red';
 

  constructor(private route: ActivatedRoute, private pictureService: BigPictureService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Set the video URL
    this.route.paramMap.subscribe(params => {
      const videoId = params.get('videoId');
      if (videoId) {
        this.videoUrl = `https://www.youtube.com/embed/${videoId}`;
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
      }
    });

    this.names = this.pictureService.getBigPictures();
    // Start the name scrolling
    this.startNameScrolling();
  }

  startNameScrolling(): void {
    this.updateName();
    setInterval(() => this.updateName(), 10000); // Change name every 5 seconds
  }


  // Shuffle the names array
  shuffleNames(): void {
    for (let i = this.names.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.names[i], this.names[j]] = [this.names[j], this.names[i]];
    }
  }


  updateName(): void {
    this.shuffleNames();

    const randomIndex1 = this.index;
    this.currentName1 = this.names[randomIndex1];
    this.htmlName1 = this.currentName1.name;


    if (this.currentName1.gender === Gender.female) {
      this.currentColor1 = '#F33A6A';
    } else {
      this.currentColor1 = this.currentColor1 === 'blue' ? 'green' : 'blue';
    }

    const randomIndex2 = ++this.index;
    this.currentName2 = this.names[randomIndex2];
    this.htmlName2 = this.currentName2.name;


    if (this.currentName2.gender === Gender.female) {
      this.currentColor2 = '#F33A6A';
    } else {
      this.currentColor2 = this.currentColor1 === 'green' ? 'blue' : 'green';
    }


    const randomIndex3 = ++this.index;
    this.currentName3 = this.names[randomIndex3];
    this.htmlName3 = this.currentName3.name;


    if (this.currentName3.gender === Gender.female) {
      this.currentColor3 = '#F33A6A';
    } else {
      this.currentColor3 = this.currentColor2 === 'blue' ? 'green' : 'blue';
    }

    if (this.index + 2 == this.names.length) {
      this.shuffleNames();
      this.index = 0;
    }

    const randomIndex4 = 0;
    this.currentName4 = null;
   // this.htmlName4 = "La réunion de l'assemblée générale de l'organisation '<span>Lukalangangu</span>' se tiendra le 24 Novembre 2024 à 22h00, heure de Paris. La présence de tous les membres est vivement attendue.";
    //this.htmlName4 = "";

    this.toggleValue();
  }

  

  toggleValue() {
    //this.myBoolean = !this.myBoolean;
  }
}

