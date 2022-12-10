import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicGridComponent } from './comic-grid/comic-grid.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComicGridComponent },
  { path: 'list', component: ComicListComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
