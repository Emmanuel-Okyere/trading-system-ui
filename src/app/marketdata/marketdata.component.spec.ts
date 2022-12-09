import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketdataComponent } from './marketdata.component';

describe('MarketdataComponent', () => {
  let component: MarketdataComponent;
  let fixture: ComponentFixture<MarketdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
