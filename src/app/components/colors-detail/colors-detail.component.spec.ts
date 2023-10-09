import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsDetailComponent } from './colors-detail.component';

describe('ColorsDetailComponent', () => {
  let component: ColorsDetailComponent;
  let fixture: ComponentFixture<ColorsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorsDetailComponent]
    });
    fixture = TestBed.createComponent(ColorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
