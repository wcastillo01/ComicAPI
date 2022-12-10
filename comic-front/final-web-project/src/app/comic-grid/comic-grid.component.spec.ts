import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicGridComponent } from './comic-grid.component';

describe('ComicGridComponent', () => {
  let component: ComicGridComponent;
  let fixture: ComponentFixture<ComicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
