import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorComponentComponent } from './constructor-component.component';

describe('ConstructorComponentComponent', () => {
  let component: ConstructorComponentComponent;
  let fixture: ComponentFixture<ConstructorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
