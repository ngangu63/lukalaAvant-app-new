/* import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}  */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() { }

  login() { this.isLoggedIn = true; }
  logout() { this.isLoggedIn = false; }
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