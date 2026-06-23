import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-act-of-notary',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './act-of-notary.component.html',
  styleUrl: './act-of-notary.component.css'
})
export class ActOfNotaryComponent {
  pdfSrc = "assets/pdfs/ActNotarisation.pdf";
}





