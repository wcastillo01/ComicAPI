import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comic-grid',
  templateUrl: './comic-grid.component.html',
  styleUrls: ['./comic-grid.component.css'],
})
export class ComicGridComponent implements OnInit {
  comics: any;
  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    this.comicService.getComics().subscribe((res) => {
      this.comics = res.results;
      console.log(this.comics);
    });
    // this.comicService.getComics();
  }
}
