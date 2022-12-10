import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css'],
})
export class ComicListComponent implements OnInit {
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
