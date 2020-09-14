import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendTransactionComponent } from './pend-transaction.component';

describe('PendTransactionComponent', () => {
  let component: PendTransactionComponent;
  let fixture: ComponentFixture<PendTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
