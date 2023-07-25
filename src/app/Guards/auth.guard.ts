import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenService } from '../services/authen.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenService);
  if(authService.IsLoggedIn()){
    return true;
} else {
  router.navigate(["login"]);
  return false;
}
}