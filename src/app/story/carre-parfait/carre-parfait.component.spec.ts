import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreParfaitComponent } from './carre-parfait.component';

describe('CarreParfaitComponent', () => {
  let component: CarreParfaitComponent;
  let fixture: ComponentFixture<CarreParfaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreParfaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreParfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
