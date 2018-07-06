import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthserviceService }      from './authservice.service';
@Injectable()
export class EventAuthGuardService implements CanActivate {

  constructor(private authService: AuthserviceService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isAuthorized("ROLE_USER")) { return true; }

    // Store the attempted URL for redirecting


    // Navigate to the login page with extras
    this.router.navigate(['/auth/login']);
    return false;
  }
}
