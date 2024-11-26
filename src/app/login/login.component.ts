
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  email!: string;
  password: any;

  onSubmit(): void {
    if (this.username && this.email && this.password) {
      alert(`Welcome, ${this.username}!`);
    } else {
      alert('Please fill out all fields.');
    }
  }
}
