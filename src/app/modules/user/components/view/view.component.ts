import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service'; // Certifique-se de que o caminho está correto
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user?: User 

  constructor(
    private userService: UserService, // Injeção do UserService
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId === null) {
      throw new Error('User ID is missing');
      // Ou redirecione o usuário, ou mostre uma mensagem de erro na UI
    } else {
      this.userService.getUserById(userId).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}  
