import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<any> {
    // Simulação: considere "user@example.com" e "password123" como credenciais válidas
    const mockEmail = "user@example.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      // Simula uma resposta de login bem-sucedida
      const mockResponse = {
        token: "mockToken123",
        userId: "user123"
      };
      return of(mockResponse).pipe(delay(1000)); // Simula uma chamada de rede com atraso
    } else {
      // Simula uma resposta de erro de login
      return throwError(() => new Error('Credenciais inválidas')).pipe(delay(1000));
    }
  }
}
