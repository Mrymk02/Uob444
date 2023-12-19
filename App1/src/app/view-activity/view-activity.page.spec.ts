import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewActivityPage } from './view-activity.page';

describe('ViewActivityPage', () => {
  let component: ViewActivityPage;
  let fixture: ComponentFixture<ViewActivityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
