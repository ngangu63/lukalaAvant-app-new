import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigPicture } from '../big-picture';
import { BigPictureService } from '../big-picture.service';

@Component({
  selector: 'app-les-dirigeants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './les-dirigeants.component.html',
  styleUrl: './les-dirigeants.component.css'
})
export class LesDirigeantsComponent implements OnInit {
  pictures: BigPicture[] = [];
  modalPicture: string = "";
  personName: string = "";
  message: string = "";

  constructor(private pictureService: BigPictureService) {}

  ngOnInit(): void {
    // Get the entire array of Pictures
    this.pictures = this.pictureService.getBigPictures();
    this.getDirigeantMemberPicture(this.pictures);
  }

  getDirigeantMemberPicture(pictures: BigPicture[]) {
    this.pictures = pictures.filter(picture => picture.role);
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
