import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; // Ajuste o caminho de acordo com a localização da sua interface User

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://sua-api-aqui.com/users'; // Substitua pela sua URL real da API

  constructor(private http: HttpClient) {}

  // Método para buscar todos os usuários
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Método para buscar um usuário pelo ID
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Método para criar um novo usuário
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Método para atualizar um usuário
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // Método para deletar um usuário
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
