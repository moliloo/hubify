import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubTasksComponent } from './hub-tasks.component';

describe('HubTasksComponent', () => {
  let component: HubTasksComponent;
  let fixture: ComponentFixture<HubTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
