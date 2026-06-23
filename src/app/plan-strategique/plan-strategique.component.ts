import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-plan-strategique',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './plan-strategique.component.html',
  styleUrl: './plan-strategique.component.css'
})
export class PlanStrategiqueComponent {
  pdfSrc = "assets/pdfs/PLANSTRATEGIQUE25_29.pdf";
}
