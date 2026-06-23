import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-fiche-de-project',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './fiche-de-project.component.html',
  styleUrl: './fiche-de-project.component.css'
})
export class FicheDeProjectComponent {
  pdfSrc = "assets/pdfs/FICHE_DE_PROJET1.pdf";
}



