import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTestComponent } from './server-test.component';

describe('ServerTestComponent', () => {
  let component: ServerTestComponent;
  let fixture: ComponentFixture<ServerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
