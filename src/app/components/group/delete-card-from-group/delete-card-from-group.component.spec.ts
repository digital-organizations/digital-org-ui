import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardFromGroupComponent } from './delete-card-from-group.component';

describe('DeleteCardFromGroupComponent', () => {
  let component: DeleteCardFromGroupComponent;
  let fixture: ComponentFixture<DeleteCardFromGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCardFromGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCardFromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
