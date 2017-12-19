import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimieComponent } from './chimie.component';

describe('ChimieComponent', () => {
  let component: ChimieComponent;
  let fixture: ComponentFixture<ChimieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
