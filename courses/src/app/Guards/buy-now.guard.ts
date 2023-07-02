import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BuyNowGuard implements CanActivateChild{
  constructor(private authenticate:AuthService){

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.authenticate.authenticateUser()==true){
        return true
      }else{
        return false
      }
  }
  
}
