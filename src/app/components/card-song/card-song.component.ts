import { Component, OnInit, Input } from '@angular/core';

import { FavouriteService} from './../../services/favourite.service'
import { Song } from './../../models/song';
@Component({
  selector: 'card-song',
  templateUrl: './card-song.component.html',
  styleUrls: ['./card-song.component.css']
})
export class CardSongComponent implements OnInit {

  @Input()
  song: Song;
  img: string;
  favourite: boolean = false;
  constructor( private _favouriteService: FavouriteService) { }

  ngOnInit() {
    this.changeImgSize();
    }

    changeImgSize(){
      var img = this.song.artworkUrl100;
      img = img.substring(0, img.length - 13);
      img +="300x300bb.jpg"
      this.img = img;
    }
    
    isFavourite(selectedSong){
      if( ! this.favourite){
        this._favouriteService.addFavourite(selectedSong);
        this.favourite = true;
      } else if (this.favourite){
        this._favouriteService.removeFavourite(selectedSong);
        this.favourite = false;
      }
    }
}
