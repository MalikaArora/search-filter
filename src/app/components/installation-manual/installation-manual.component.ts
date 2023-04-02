import { Component } from '@angular/core';

@Component({
  selector: 'app-installation-manual',
  templateUrl: './installation-manual.component.html',
  styleUrls: ['./installation-manual.component.scss']
})
export class InstallationManualComponent 
{
  openPDF11() {
    window.open('../../../assets/pdf/InstallationManual.pdf', '_blank');
  }
  openPDF12() {
    window.open('../../../assets/pdf/API Starting Guide.pdf', '_blank');
  }
}

