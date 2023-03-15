import { Component } from '@angular/core';

@Component({
  selector: 'app-installation-manual',
  templateUrl: './installation-manual.component.html',
  styleUrls: ['./installation-manual.component.scss']
})
export class InstallationManualComponent {
  openPDF() {
    window.open('../../../assets/pdf/InstallationManual.pdf', '_blank');
  }
}
