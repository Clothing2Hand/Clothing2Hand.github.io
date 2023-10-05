import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ClothesService } from '../clothes/clothes.service';

export const isOwnerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  const clothingService = inject(ClothesService)

  const user = authService.user

  if(authService.user){
    const userId = authService.user?._id
    // const clothingId = route.params['id'] // ?????
    const ownerId = clothingService.clothing?.owner
  
    return userId == ownerId ? true : router.navigate(['/missingCredentials']) 
  } 

  return router.navigate(['/missingCredentials'])
};
