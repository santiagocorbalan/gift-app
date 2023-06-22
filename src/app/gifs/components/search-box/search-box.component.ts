import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gift-search-box',
  styleUrls: ['./search-box.component.css'],
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="Buscar gifs ..." (keyup.enter)= "searchTag()" #txtTagInput>`
})
export class SearchBoxComponent {

  constructor(private _gifsServices: GifsService){
  }
  // View child nos sirve para tomar una referencia local, en este caso #txtTagInput
  @ViewChild('txtTagInput')
  public tagInput! : ElementRef<HTMLInputElement>;  
  
  searchTag (){
    const newTag =this.tagInput.nativeElement.value;
    this._gifsServices.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
