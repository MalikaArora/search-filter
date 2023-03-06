import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPartsComponent } from './subscription-parts.component';

describe('SubscriptionPartsComponent', () => {
  let component: SubscriptionPartsComponent;
  let fixture: ComponentFixture<SubscriptionPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
