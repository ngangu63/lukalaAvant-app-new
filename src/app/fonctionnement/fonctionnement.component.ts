import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-fonctionnement',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './fonctionnement.component.html',
  styleUrl: './fonctionnement.component.css'
})
export class FonctionnementComponent {
  pdfSrc = "assets/pdfs/Fonctionnement2.pdf";
}

