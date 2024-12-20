import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubNavbarComponent } from './hub-navbar.component';

describe('HubNavbarComponent', () => {
  let component: HubNavbarComponent;
  let fixture: ComponentFixture<HubNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
