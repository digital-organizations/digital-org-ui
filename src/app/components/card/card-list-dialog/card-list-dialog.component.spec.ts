import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListDialogComponent } from './card-list-dialog.component';

describe('CardListDialogComponent', () => {
  let component: CardListDialogComponent;
  let fixture: ComponentFixture<CardListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
