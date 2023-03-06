import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversaldiaPartsComponent } from './universaldia-parts.component';

describe('UniversaldiaPartsComponent', () => {
  let component: UniversaldiaPartsComponent;
  let fixture: ComponentFixture<UniversaldiaPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversaldiaPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversaldiaPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
