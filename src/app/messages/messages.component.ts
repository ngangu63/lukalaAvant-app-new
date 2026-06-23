import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  pdfSrc = "assets/pdfs/Message_pour_Lukala4.pdf";
}
