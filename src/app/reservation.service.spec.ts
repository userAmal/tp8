import { ReservationService } from './reservation.service';
import { TestBed } from '@angular/core/testing';


describe('ReservationService', () => {
  let service:ReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
