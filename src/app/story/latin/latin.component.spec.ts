import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatinComponent } from './latin.component';

describe('LatinComponent', () => {
  let component: LatinComponent;
  let fixture: ComponentFixture<LatinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
