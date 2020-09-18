import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListUpdateComponent } from './card-list-update.component';

describe('CardListUpdateComponent', () => {
  let component: CardListUpdateComponent;
  let fixture: ComponentFixture<CardListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
