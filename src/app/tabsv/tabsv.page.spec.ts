import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsvPage } from './tabsv.page';

describe('TabsvPage', () => {
  let component: TabsvPage;
  let fixture: ComponentFixture<TabsvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
