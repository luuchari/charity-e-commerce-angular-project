import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { UserListComponent } from './users/user-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductDetailsComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'add-product', component: ProductDetailsComponent },
      { path: 'edit-product/:id', component: ProductDetailsComponent },
      { path: 'users', component: UserListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
