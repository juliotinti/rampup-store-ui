import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { HomeComponent } from './Components/home/home.component';
import { OrdersListComponent } from './Components/orders-list/orders-list.component';
import { TicketsListComponent } from './Components/tickets-list/tickets-list.component';
import { AuthComponent } from './Components/auth/auth.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { AuthGuard } from './Components/authGuard/auth-guard.guard';
import { OrderDetailComponent } from './Components/order-detail/order-detail.component';
import { AdmTicketsComponent } from './Components/adm-tickets/adm-tickets.component';
import { AdmProductsComponent } from './Components/adm-products/adm-products.component';
import { AdmUsersComponent } from './Components/adm-users/adm-users.component';
import { AdmOrdersComponent } from './Components/adm-orders/adm-orders.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AdmInfoComponent } from './Components/adm-info/adm-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductsListComponent },
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersListComponent },
      { path: 'orders/:id', component: OrderDetailComponent },
      { path: 'tickets', component: TicketsListComponent },
      { path: 'admin/tickets', component: AdmTicketsComponent },
      { path: 'admin/products', component: AdmProductsComponent },
      { path: 'admin/users', component: AdmUsersComponent },
      { path: 'admin/orders', component: AdmOrdersComponent },
      { path: 'admin/orders/:id', component: OrderDetailComponent },
      { path: 'admin/info', component: AdmInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
