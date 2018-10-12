import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatetoolbarComponent } from './candidatetoolbar.component';

describe('CandidatetoolbarComponent', () => {
  let component: CandidatetoolbarComponent;
  let fixture: ComponentFixture<CandidatetoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatetoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatetoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
