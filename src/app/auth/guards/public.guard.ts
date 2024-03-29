// import { inject } from '@angular/core';
// import { Observable, map, tap } from 'rxjs';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   CanMatchFn,
//   Route,
//   Router,
//   RouterStateSnapshot,
//   UrlSegment,
// } from '@angular/router';
// import { AuthService } from '../services/auth.service';


// const checkAuthStatusRegistered = (): boolean | Observable<boolean> => {
//   //se inyectan el AuthService y el Router
//   const authService: AuthService = inject(AuthService);
//   const router: Router = inject(Router);

//   return authService.checkAuthentication().pipe(

//     tap( isAuthenticated => console.log({ 'Authenticated': isAuthenticated }) ),
//     tap( ( isAuthenticated ) => {
//       if ( isAuthenticated ) {
//         router.navigate(['./'])
//       }
//     }),
//     map( isAuthenticated => !isAuthenticated )

//   )
// }

// //No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing
// export const canActivateGuardRegistered: CanActivateFn = (
//   //Hay que tener en cuenta el tipado CanActiveFn
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   // console.log('CanActivate');
//   // console.log({ route, state });

//   return checkAuthStatusRegistered();
//   // return true
// }

// export const canMatchGuardRegistered: CanMatchFn = (
//   //Tipado CanMatchFN
//   route: Route,
//   segments: UrlSegment[]
// ) => {
//   // console.log('CanMatch');
//   // console.log({ route, segments });

//   return checkAuthStatusRegistered();
//   // return true
// };
