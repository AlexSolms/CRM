import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDiaologComponent } from './address-diaolog.component';

describe('AddressDiaologComponent', () => {
  let component: AddressDiaologComponent;
  let fixture: ComponentFixture<AddressDiaologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressDiaologComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressDiaologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
