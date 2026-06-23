import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-agri-pilote',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './agri-pilote.component.html',
  styleUrl: './agri-pilote.component.css',
})
export class AgriPiloteComponent {
  pdfSrc = 'assets/pdfs/PROJETPILOTE.pdf';
}
