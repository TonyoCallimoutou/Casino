import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogWindowsComponent } from './log-windows.component';

describe('LogWindowsComponent', () => {
  let component: LogWindowsComponent;
  let fixture: ComponentFixture<LogWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogWindowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
