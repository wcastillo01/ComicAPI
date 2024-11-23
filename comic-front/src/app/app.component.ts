import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { }

  randomComic(): void {
    const randomNumber = Math.floor(Math.random() * 10) + 6;
    console.log(randomNumber);
    this.router.navigate([`/details/${randomNumber}`]);

  }

}
