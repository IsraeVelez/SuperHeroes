/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VillanoComponent } from './villano.component';

describe('VillanoComponent', () => {
  let component: VillanoComponent;
  let fixture: ComponentFixture<VillanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
