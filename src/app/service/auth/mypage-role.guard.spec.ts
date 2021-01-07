import { TestBed } from '@angular/core/testing';

import { MypageRoleGuard } from './mypage-role.guard';

describe('MypageRoleGuard', () => {
  let guard: MypageRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MypageRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
