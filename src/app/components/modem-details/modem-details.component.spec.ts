import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemDetailsComponent } from './modem-details.component';

describe('ModemDetailsComponent', () => {
  let component: ModemDetailsComponent;
  let fixture: ComponentFixture<ModemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
