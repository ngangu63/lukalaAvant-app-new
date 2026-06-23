import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  pdfSrc = "assets/pdfs/Projet_de_Statuts1.pdf";

}



