import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent implements OnInit {
  title: string ="Titulo";
  album: string= "Album";
  img: string ="http://www.progarchives.com/progressive_rock_discography_covers/1038/cover_8521392009.jpg";
  constructor() { }

  ngOnInit() {
  }

}
