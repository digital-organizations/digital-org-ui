import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardInGroupComponent } from './create-card-in-group.component';

describe('CreateCardInGroupComponent', () => {
  let component: CreateCardInGroupComponent;
  let fixture: ComponentFixture<CreateCardInGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardInGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
