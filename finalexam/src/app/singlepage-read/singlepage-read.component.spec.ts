import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepageReadComponent } from './singlepage-read.component';

describe('SinglepageReadComponent', () => {
  let component: SinglepageReadComponent;
  let fixture: ComponentFixture<SinglepageReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepageReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepageReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
