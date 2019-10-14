import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRestPage } from './info-rest.page';

describe('InfoRestPage', () => {
  let component: InfoRestPage;
  let fixture: ComponentFixture<InfoRestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
