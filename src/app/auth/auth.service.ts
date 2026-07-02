/* import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}  */

import { Injectable } from '@angular/core';

export interface Credentials {
  userId: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  /**
   * Mock credentials — kept in the service, NOT in any component.
   * Replace this list (and the check in `login()`) with a real backend
   * authentication call when a server is available.
   */
  private readonly mockUsers: Credentials[] = [
    { userId: 'admin', password: '2026' },
  ];

  constructor() { }

  /**
   * Validate a user id + password. Returns a Promise so the calling code is
   * already written for an async (backend) flow.
   *
   * To switch to a backend later, inject HttpClient and replace the body:
   *   return firstValueFrom(
   *     this.http.post<boolean>('/api/auth/login', { userId, password })
   *   ).then(ok => (this.isLoggedIn = ok));
   */
  login(userId: string, password: string): Promise<boolean> {
    const match = this.mockUsers.some(
      (u) => u.userId === userId && u.password === password,
    );
    this.isLoggedIn = match;
    return Promise.resolve(match);
  }

  logout(): void { this.isLoggedIn = false; }
  isAuthenticated(): boolean { return this.isLoggedIn; }
}



// auth/auth.service.ts
/* import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;

  login() { this.isLoggedIn = true; }
  logout() { this.isLoggedIn = false; }
  isAuthenticated(): boolean { return this.isLoggedIn; }
}
 */