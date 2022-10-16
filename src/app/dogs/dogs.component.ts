import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  
  breeds = this.apiService.getBreeds();
  selectedBreed = "akita"
  breedImg = this.apiService.getImg(this.selectedBreed);
  wikiLink = `https://en.wikipedia.org/wiki/${this.selectedBreed}`


  constructor(private apiService: ApiService) { }

  changeBreed(): void {
    this.breedImg = this.apiService.getImg(this.selectedBreed);
    this.wikiLink = `https://en.wikipedia.org/wiki/${this.selectedBreed}`
  }


}
