import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanytoolbarComponent } from './companytoolbar.component';

describe('CompanytoolbarComponent', () => {
  let component: CompanytoolbarComponent;
  let fixture: ComponentFixture<CompanytoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanytoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanytoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
