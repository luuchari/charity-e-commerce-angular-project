import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
i: any;
user: any;

}
export class UsersListComponent {
  users = [
    { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'Customer' },
    { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Vendor' },
    { name: 'Diana Prince', email: 'diana@example.com', role: 'Customer' }
  ];
}
