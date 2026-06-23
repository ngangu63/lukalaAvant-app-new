import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigPicture } from '../big-picture';
import { BigPictureService } from '../big-picture.service';

@Component({
  selector: 'app-others-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './others-members.component.html',
  styleUrl: './others-members.component.css'
})
export class OthersMembersComponent implements OnInit {

  pictures: BigPicture[] = [];
  modalPicture: string = "";
  personName: string = "";
  message: string = "";


  constructor(private pictureService: BigPictureService) { }

  ngOnInit(): void {
    // Get the entire array of Pictures
    this.pictures = this.pictureService.getBigPictures();
    this.getMemberPicture(this.pictures);


  }


  getMemberPicture(pictures: BigPicture[]) {
    let Mypictures: BigPicture[] = [];
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].role) Mypictures.push(pictures[i]);
    }
    for (let i = 0; i < pictures.length; i++) {
      if (!pictures[i].role) Mypictures.push(pictures[i]);
    }
    this.pictures = Mypictures;
  }




  openPicture(picture: BigPicture): void {
    const modelDiv = document.getElementById('myModal');
    this.modalPicture = picture.imageUrl;
    this.personName = picture.name;
    this.message = picture.message;
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }

  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
}


