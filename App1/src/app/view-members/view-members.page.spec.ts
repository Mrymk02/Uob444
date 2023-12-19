import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewMembersPage } from './view-members.page';

describe('ViewMembersPage', () => {
  let component: ViewMembersPage;
  let fixture: ComponentFixture<ViewMembersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
