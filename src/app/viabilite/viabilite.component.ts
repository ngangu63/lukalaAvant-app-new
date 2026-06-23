import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-viabilite',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './viabilite.component.html',
  styleUrl: './viabilite.component.css'
})
export class ViabiliteComponent {
  pdfSrc = "assets/pdfs/viabilite.pdf";
}



