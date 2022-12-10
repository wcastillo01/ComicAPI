import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService
  ) {}

  comicDetail: any;
  ngOnInit(): void {
    this.GetDetails();
  }

  GetDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comicService.getComicsById(id).subscribe((res) => {
      this.comicDetail = res.results;
    });
  }
}
