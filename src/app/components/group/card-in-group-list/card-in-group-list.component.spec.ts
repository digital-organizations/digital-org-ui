import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInGroupListComponent } from './card-in-group-list.component';

describe('CardInGroupListComponent', () => {
  let component: CardInGroupListComponent;
  let fixture: ComponentFixture<CardInGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInGroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
