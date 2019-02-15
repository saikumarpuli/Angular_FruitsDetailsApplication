import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsDeailsComponent } from './fruits-deails.component';

describe('FruitsDeailsComponent', () => {
  let component: FruitsDeailsComponent;
  let fixture: ComponentFixture<FruitsDeailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsDeailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsDeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
