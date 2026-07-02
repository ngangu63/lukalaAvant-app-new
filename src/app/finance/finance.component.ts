import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent {

  private readonly filePath = 'assets/Excells/CotisationSpeciale0.xlsx';

  excelData: any[] = [];

  // Login form state
  userId = '';
  password = '';
  loginError = '';

  constructor(private auth: AuthService) {
    // If the user authenticated earlier in this session and navigated back,
    // restore the data without asking again.
    if (this.auth.isAuthenticated()) {
      this.loadExcelFile();
    }
  }

  get isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  async onLogin(): Promise<void> {
    this.loginError = '';
    const ok = await this.auth.login(this.userId.trim(), this.password);
    if (ok) {
      this.password = '';
      this.loadExcelFile();
    } else {
      this.loginError = 'Identifiant ou mot de passe incorrect.';
      this.excelData = [];
    }
  }

  logout(): void {
    this.auth.logout();
    this.excelData = [];
    this.userId = '';
    this.password = '';
    this.loginError = '';
  }

  loadExcelFile(): void {
    fetch(this.filePath)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const workbook = XLSX.read(buffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      })
      .catch(error => {
        console.error('Error reading the Excel file:', error);
      });
  }

  /** Download the Excel file — only reachable once authenticated. */
  async downloadExcelFile(): Promise<void> {
    if (!this.auth.isAuthenticated()) {
      return;
    }
    try {
      const response = await fetch(this.filePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'CotisationSpeciale0.xlsx';
      anchor.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the Excel file:', error);
    }
  }

  isNumeric(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  getColor(value: any): string {
    if (this.isNumeric(value)) {
      return parseFloat(value) <= 0 ? 'red' : 'black';
    }
    return 'black';
  }

  formatHeader(header: string, limit: number): string {
    if (header.length <= limit) return header;
    return header.slice(0, limit) + '<br>' + header.slice(limit);
  }

}
