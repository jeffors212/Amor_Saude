import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Aqui você deve verificar se o usuário está autenticado
    // Isso pode ser feito verificando se existe um token de autenticação ou uma flag de login
    const isAuthenticated = false; // Substitua isso pela sua lógica de verificação de autenticação

    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redireciona para o login se não estiver autenticado
      return false;
    }

    return true;
  }

}
