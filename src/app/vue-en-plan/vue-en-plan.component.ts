import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-vue-en-plan',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './vue-en-plan.component.html',
  styleUrl: './vue-en-plan.component.css'
})
export class VueEnPlanComponent {
  pdfSrc = "assets/pdfs/VueEnPlanDeLaMorgue.pdf";
}
