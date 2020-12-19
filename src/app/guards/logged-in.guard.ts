import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  RouterPreloader,
} from '@angular/router';
import { observable, Observable } from 'rxjs';
import { MainService } from '../services/main_service/main.service';
import { catchError, map, observeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private main_service: MainService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return this.main_service.check().pipe(map(res => {
        if(res.authenticated){this.router.navigate(['/home'])}
        return true
      }))
  }
}
