import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDeleteComponent } from './color-delete.component';

describe('ColorDeleteComponent', () => {
  let component: ColorDeleteComponent;
  let fixture: ComponentFixture<ColorDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDeleteComponent]
    });
    fixture = TestBed.createComponent(ColorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
