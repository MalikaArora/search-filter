import { Component } from '@angular/core';

@Component({
  selector: 'app-training-material',
  templateUrl: './training-material.component.html',
  styleUrls: ['./training-material.component.scss']
})
export class TrainingMaterialComponent {
  openPDF1() {
    window.open('../../../assets/pdf/00 Introduction to Telematics  v1.0 19032023.pdf', '_blank');
  }
  openPDF2() {
    window.open('../../../assets/pdf/01 SiteWatch AMS v1.0 19032023.pdf', '_blank');
  }
  openPDF3() {
    window.open('../../../assets/pdf/02 SiteConnect AMS v1.0 19032013.pdf', '_blank');
  }
  openPDF4() {
    window.open('../../../assets/pdf/03 TSP AMS v1.0 19032023.pdf', '_blank');
  }
  openPDF5() {
    window.open('../../../assets/pdf/04 SiteWatch Sales & Marketing v1.0 19032023.pdf', '_blank');
  }
  openPDF6() {
    window.open('../../../assets/pdf/05 SiteConnect Sales & Marketing v1.0 19032023.pdf', '_blank');
  }
  openPDF7() {
    window.open('../../../assets/pdf/06 TSP Sales & Marketing v1.0 19032023.pdf', '_blank');
  }
  
}
