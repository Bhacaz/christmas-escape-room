import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotCacheComponent } from './mot-cache.component';

describe('MotCacheComponent', () => {
  let component: MotCacheComponent;
  let fixture: ComponentFixture<MotCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
