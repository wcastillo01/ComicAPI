import { Component, OnInit } from '@angular/core';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-comic-grid',
  templateUrl: './comic-grid.component.html',
  styleUrls: ['./comic-grid.component.css'],
})
export class ComicGridComponent implements OnInit {
  viewStyle = 'grid';
  isLoading = true;

  pageNumber = 1;
  comics: any;
  constructor(private comicService: ComicService) {}

  changeToGrid(): void {
    this.viewStyle = 'grid';
  }

  changeToList(): void {
    this.viewStyle = 'list';
  }

  NextPage(): void {
    this.pageNumber++;
    this.isLoading = true;
    this.comicService.loadMoreComics(this.pageNumber).subscribe((res) => {
      this.comics = res.results;
      this.isLoading = false;
      console.log(this.comics);
    });
  }

  PreviousPage(): void {
    if (this.pageNumber === 1) {
      return;
    }

    this.pageNumber--; 
    this.isLoading = true;
    this.comicService.loadMoreComics(this.pageNumber).subscribe((res) => {
      this.comics = res.results;
      this.isLoading = false;
      console.log(this.comics);
    });
  }

  ngOnInit(): void {
    this.comicService.loadMoreComics(this.pageNumber).subscribe((res) => {
      this.comics = res.results;
      this.isLoading = false;
      console.log(this.comics);
    });
    this.comicService.getComics();
  }
}
