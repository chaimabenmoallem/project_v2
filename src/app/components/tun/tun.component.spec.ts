import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunComponent } from './tun.component';

describe('TunComponent', () => {
  let component: TunComponent;
  let fixture: ComponentFixture<TunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
