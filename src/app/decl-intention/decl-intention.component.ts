import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-decl-intention',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './decl-intention.component.html',
  styleUrl: './decl-intention.component.css'
})
export class DeclIntentionComponent {
  pdfSrc = "assets/pdfs/DeclarationDintention2.pdf";
}





