import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard'; // Ajuste o caminho conforme necessário

// Importe seus componentes protegidos
// import { YourProtectedComponent } from './path/to/your-protected-component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // Exemplo de rota protegida
  // {
  //   path: 'protected-path', // Substitua 'protected-path' pelo caminho real
  //   // component: YourProtectedComponent, // Substitua por seu componente protegido
  //   canActivate: [AuthGuard] // Aplica o AuthGuard a esta rota
  // },
  // Adicione outras rotas protegidas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
