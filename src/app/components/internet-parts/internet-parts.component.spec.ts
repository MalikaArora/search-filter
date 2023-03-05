import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetPartsComponent } from './internet-parts.component';

describe('InternetPartsComponent', () => {
  let component: InternetPartsComponent;
  let fixture: ComponentFixture<InternetPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternetPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
