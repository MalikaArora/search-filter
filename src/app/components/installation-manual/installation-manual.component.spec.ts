import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationManualComponent } from './installation-manual.component';

describe('InstallationManualComponent', () => {
  let component: InstallationManualComponent;
  let fixture: ComponentFixture<InstallationManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationManualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
