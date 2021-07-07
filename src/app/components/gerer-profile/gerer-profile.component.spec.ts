import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProfileComponent } from './gerer-profile.component';

describe('GererProfileComponent', () => {
  let component: GererProfileComponent;
  let fixture: ComponentFixture<GererProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
