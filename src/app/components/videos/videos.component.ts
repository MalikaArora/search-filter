import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  openVideo1() {
    window.open('../../../assets/pdf/01 Power of Telematics.mp4', '_blank');
  }

    openVideo2() {
      window.open('../../../assets/pdf/02 SiteWatch.mp4', '_blank');
    }

      openVideo3() {
        window.open('../../../assets/pdf/03 SiteConnect.mp4', '_blank');
      }
        openVideo4() {
          window.open('../../../assets/pdf/04 Customer Testmonials.mp4', '_blank');
        }
}
