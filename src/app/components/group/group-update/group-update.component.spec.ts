import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupUpdateComponent } from './group-update.component';

describe('GroupUpdateComponent', () => {
  let component: GroupUpdateComponent;
  let fixture: ComponentFixture<GroupUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
