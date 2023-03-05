import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemPartComponent } from './modem-part.component';

describe('ModemPartComponent', () => {
  let component: ModemPartComponent;
  let fixture: ComponentFixture<ModemPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModemPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModemPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
