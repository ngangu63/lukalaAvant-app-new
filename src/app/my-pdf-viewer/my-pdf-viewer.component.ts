/* import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-pdf-viewer',
  standalone: true,
  imports: [PdfViewerModule,CommonModule],
  templateUrl: './my-pdf-viewer.component.html',
  styleUrl: './my-pdf-viewer.component.css'
})
export class MyPdfViewerComponent implements OnInit{

  pdfSrc: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pdfSrc = params['fileName'];
    });
  }
}
 */



import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-pdf-viewer',
  standalone: true,
  imports: [PdfViewerModule,CommonModule],
  templateUrl: './my-pdf-viewer.component.html',
  styleUrl: './my-pdf-viewer.component.css'
})
export class MyPdfViewerComponent {
  pdfSrc = "assets/pdfs/Message_pour_Lukala.pdf";
}
