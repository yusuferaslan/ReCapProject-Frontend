import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDeleteComponent } from './brand-delete.component';

describe('BrandDeleteComponent', () => {
  let component: BrandDeleteComponent;
  let fixture: ComponentFixture<BrandDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandDeleteComponent]
    });
    fixture = TestBed.createComponent(BrandDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
