import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavigationSidebarComponent } from './Components/navigation-sidebar/navigation-sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { TicketsListComponent } from './Components/tickets-list/tickets-list.component';
import { OrdersListComponent } from './Components/orders-list/orders-list.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { OrderComponent } from './Components/orders-list/order/order.component';
import { ProductComponent } from './Components/products-list/product/product.component';
import { TicketsComponent } from './Components/tickets-list/tickets/tickets.component';
import { CustomerComponent } from './Components/home/customer/customer.component';
import { AddressesComponent } from './Components/home/addresses/addresses.component';
import { AuthComponent } from './Components/auth/auth.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { LoadingSpinnerComponent } from './Components/shared/loading-spinner/loading-spinner.component';
import { AddAddressComponent } from './Components/home/addresses/add-address/add-address.component';
import { EditAddressComponent } from './Components/home/addresses/edit-address/edit-address.component';
import { EditCustomerComponent } from './Components/home/customer/edit-customer/edit-customer.component';
import { OpenTicketComponent } from './Components/orders-list/order/open-ticket/open-ticket.component';
import { DeleteAccountComponent } from './Components/home/delete-account/delete-account.component';
import { DeleteUserComponent } from './Components/home/delete-account/delete-user/delete-user.component';
import { DeleteAddressComponent } from './Components/home/addresses/delete-address/delete-address.component';
import { OrderDetailComponent } from './Components/order-detail/order-detail.component';
import { AdmTicketsComponent } from './Components/adm-tickets/adm-tickets.component';
import { AdmTicketComponent } from './Components/adm-tickets/adm-ticket/adm-ticket.component';
import { SolveTicketComponent } from './Components/adm-tickets/solve-ticket/solve-ticket.component';
import { AdmProductsComponent } from './Components/adm-products/adm-products.component';
import { DeleteProductComponent } from './Components/adm-products/delete-product/delete-product.component';
import { AddProductComponent } from './Components/adm-products/add-product/add-product.component';
import { AdmUsersComponent } from './Components/adm-users/adm-users.component';
import { AddAdminComponent } from './Components/adm-users/add-admin/add-admin.component';
import { RemoveUserComponent } from './Components/adm-users/remove-user/remove-user.component';
import { AdmOrdersComponent } from './Components/adm-orders/adm-orders.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AddProductToShoppingComponent } from './Components/products-list/add-product-to-shopping/add-product-to-shopping.component';
import { AdmInfoComponent } from './Components/adm-info/adm-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationSidebarComponent,
    HomeComponent,
    TicketsListComponent,
    OrdersListComponent,
    ProductsListComponent,
    OrderComponent,
    ProductComponent,
    TicketsComponent,
    CustomerComponent,
    AddressesComponent,
    AuthComponent,
    NavigationComponent,
    LoadingSpinnerComponent,
    AddAddressComponent,
    EditAddressComponent,
    EditCustomerComponent,
    OpenTicketComponent,
    DeleteAccountComponent,
    DeleteUserComponent,
    DeleteAddressComponent,
    OrderDetailComponent,
    AdmTicketsComponent,
    AdmTicketComponent,
    SolveTicketComponent,
    AdmProductsComponent,
    DeleteProductComponent,
    AddProductComponent,
    AdmUsersComponent,
    AddAdminComponent,
    RemoveUserComponent,
    AdmOrdersComponent,
    ShoppingCartComponent,
    AddProductToShoppingComponent,
    AdmInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    NgxMaskModule.forRoot(),
    MatSidenavModule,
    MatBadgeModule,
    MatSelectModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
