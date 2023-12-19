import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisteredPage } from './registered.page';

describe('RegisteredPage', () => {
  let component: RegisteredPage;
  let fixture: ComponentFixture<RegisteredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisteredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
