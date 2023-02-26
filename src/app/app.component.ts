import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-text-search-highlight';
  searchText = '';
  data = [{
    "category": "A",
    "query": "Why do use the terminology CM1X?",
    "answer": "Because we have two variants of Modem: With Internal Antenna (CM100) & With External Antenna (CM110)"
  },
  {
    "category": "B",
    "query": "Will CM1X although designed to work with 4G, with still work in regions wherein ISPs don’t offer 4G services?",
    "answer": "Yes, CM1X will work with 2G, 3G or LTE (4G) but with subordinate performance and lower speed and with slower data transmission"
  }
]
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
    'Black Canary',
    'Black Panther',
    'Captain America',
    'Captain Marvel',
    'Catwoman',
    'Conan the Barbarian',
    'Daredevil',
    'The Defenders',
    'Doc Savage',
    'Doctor Strange',
    'Elektra',
    'Fantastic Four',
    'Ghost Rider',
    'Green Arrow',
    'Green Lantern',
    'Guardians of the Galaxy',
    'Hawkeye',
    'Hellboy',
    'Incredible Hulk',
    'Iron Fist',
    'Iron Man',
    'Marvelman',
    'Robin',
    'The Rocketeer',
    'The Shadow',
    'Spider-Man',
    'Sub-Mariner',
    'Supergirl',
    'Superman',
    'Teenage Mutant Ninja Turtles',
    'Thor',
    'The Wasp',
    'Watchmen',
    'Wolverine',
    'Wonder Woman',
    'X-Men',
    'Zatanna',
    'Zatara',
  ];
}
