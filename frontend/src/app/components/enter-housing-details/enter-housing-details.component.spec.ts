import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterHousingDetailsComponent } from './enter-housing-details.component';

describe('EnterHousingDetailsComponent', () => {
  let component: EnterHousingDetailsComponent;
  let fixture: ComponentFixture<EnterHousingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterHousingDetailsComponent]
    });
    fixture = TestBed.createComponent(EnterHousingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
