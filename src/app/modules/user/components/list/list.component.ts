// list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: data => this.dataSource.data = data,
      error: err => console.error(err),
      // Implemente a lógica para "carregando" aqui
    });
  }
}
