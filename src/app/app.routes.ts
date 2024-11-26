
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { UserListComponent } from './users/user-list.component';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
    LoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot([
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
    ]),
  ],
  providers: [AuthGuard],
})
export class AppModule {}
