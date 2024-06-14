// export class AuthGuard implements CanAc{
// }

import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
    const token = sessionStorage.getItem('token')
    if (token) {
        return true
    } else {
        const router = inject(Router)
        router.navigate(
            ['/login'],
            {
                queryParams: {
                    "returnUrl": state.url
                }
            }
        )
        return false
    }
} 