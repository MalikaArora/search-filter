import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  openVideo1() {
    window.open('https://drive.google.com/file/d/1SMv7vEid5DwFuxcNmI9prLS4LqyD1DGo/view', '_blank');
  }

  openVideo2() {
    window.open('https://drive.google.com/file/d/1t-pPgdmkriNL7gS0WiRSR65rmkAbopsJ/view', '_blank');
  }

  openVideo3() {
    window.open('https://drive.google.com/file/d/1Dc9SFEldnBT1eUYHo9ekGgXvcP1vLCmn/view', '_blank');
  }
  openVideo4() {
    window.open('https://drive.google.com/file/d/1v55EhmOZT598FBHTLxBrOVFJOsbIxvro/view', '_blank');
  }
}
