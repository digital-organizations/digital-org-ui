import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserGroupComponent } from './remove-user-group.component';

describe('RemoveUserGroupComponent', () => {
  let component: RemoveUserGroupComponent;
  let fixture: ComponentFixture<RemoveUserGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveUserGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
