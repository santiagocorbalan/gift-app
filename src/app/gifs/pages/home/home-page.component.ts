import { GifsService } from 'src/app/gifs/services/gifs.service';
import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
constructor( private gifsService: GifsService){

}
get gifsHomePage(): Gif[]{
  return this.gifsService.gifList;
}
}
