import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisBarComponent } from './analysis-bar.component';

describe('AnalysisBarComponent', () => {
  let component: AnalysisBarComponent;
  let fixture: ComponentFixture<AnalysisBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
