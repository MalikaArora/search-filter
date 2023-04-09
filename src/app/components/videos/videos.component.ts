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

  openVideo2a() {
    window.open('https://drive.google.com/file/d/1t-pPgdmkriNL7gS0WiRSR65rmkAbopsJ/view', '_blank');
  }
  openVideo2b() {
    window.open('https://drive.google.com/file/d/13Ke1yYQb4-UUTZlLETGUjPFD5B5TBOiu/view', '_blank');
  }
  openVideo2c() {
    window.open('https://drive.google.com/file/d/1U3I09NZJWZuErtFylCVwR4ZoVmIwp7QA/view', '_blank');
  }
  openVideo3a() {
    window.open('https://drive.google.com/file/d/1Dc9SFEldnBT1eUYHo9ekGgXvcP1vLCmn/view', '_blank');
  }
  openVideo3b() {
    window.open('https://drive.google.com/file/d/1989otqbNzH63tzOLff5kv4wXu-9gdi1V/view', '_blank');
  }
  openVideo4a() {
    window.open('https://drive.google.com/file/d/1v55EhmOZT598FBHTLxBrOVFJOsbIxvro/view', '_blank');
  }
  openVideo4b() {
    window.open('https://drive.google.com/file/d/1r4WuZC52Af-whFKweDLZkcEmJcPeEURK/view', '_blank');
  }
}
