import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOnOffComponent } from './btn-on-off.component';

describe('BtnOnOffComponent', () => {
  let component: BtnOnOffComponent;
  let fixture: ComponentFixture<BtnOnOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOnOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnOnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
