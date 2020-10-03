import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCharItemComponent } from './app-char-item.component';

describe('AppCharItemComponent', () => {
  let component: AppCharItemComponent;
  let fixture: ComponentFixture<AppCharItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCharItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCharItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
