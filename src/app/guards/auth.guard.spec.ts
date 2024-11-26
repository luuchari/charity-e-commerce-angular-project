import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Import RouterTestingModule to mock routing
      providers: [AuthGuard], // Provide AuthGuard
    });
    guard = TestBed.inject(AuthGuard); // Inject the AuthGuard into the test
    router = TestBed.inject(Router); // Inject Router
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Check if AuthGuard is created successfully
  });

  it('should allow access if the user is authenticated', () => {
    // Mock localStorage to simulate the user being logged in
    spyOn(localStorage, 'getItem').and.returnValue('user'); // Simulate a logged-in user
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBeTrue(); // The guard should allow access
  });

  it('should block access and redirect to login if the user is not authenticated', () => {
    // Mock localStorage to simulate the user not being logged in
    spyOn(localStorage, 'getItem').and.returnValue(null); // Simulate no user logged in
    const navigateSpy = spyOn(router, 'navigate'); // Spy on the navigate method of Router
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBeFalse(); // The guard should block access
    expect(navigateSpy).toHaveBeenCalledWith(['/login']); // The guard should redirect to the login page
  });
});
