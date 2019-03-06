import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatuComponent } from './satu.component';

describe('SatuComponent', () => {
  let component: SatuComponent;
  let fixture: ComponentFixture<SatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
