import { TestBed } from '@angular/core/testing';

import { AuthheaderInterceptor } from './authheader.interceptor';

describe('AuthheaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthheaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthheaderInterceptor = TestBed.inject(AuthheaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
