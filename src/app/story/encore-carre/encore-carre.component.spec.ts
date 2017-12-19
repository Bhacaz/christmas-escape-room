import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoreCarreComponent } from './encore-carre.component';

describe('EncoreCarreComponent', () => {
  let component: EncoreCarreComponent;
  let fixture: ComponentFixture<EncoreCarreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncoreCarreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoreCarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
