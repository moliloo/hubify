import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubHomeComponent } from './hub-home.component';

describe('HubHomeComponent', () => {
  let component: HubHomeComponent;
  let fixture: ComponentFixture<HubHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
