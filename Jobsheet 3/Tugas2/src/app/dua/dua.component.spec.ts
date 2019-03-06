import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuaComponent } from './dua.component';

describe('DuaComponent', () => {
  let component: DuaComponent;
  let fixture: ComponentFixture<DuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
