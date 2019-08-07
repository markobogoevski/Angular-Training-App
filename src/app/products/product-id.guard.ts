import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductIdGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.paramMap.get('id');
    if(isNaN(id)||id<1){
      alert('Product Id is invalid!');
      this.router.navigate(['products']);
      return false;
    }
    return true;
  }
}
