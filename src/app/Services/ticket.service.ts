import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../Models/ticket';
import { TicketDTO } from '../Models/ticketDTO';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  insertTicket(orderId: number, ticket: TicketDTO) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.post<Ticket>(
      `http://localhost:8080/orders/${orderId}/ticket/`,
      ticket,
      options
    );
  }

  getAllCustomersTicket(page: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<Ticket[]>(
      `http://localhost:8080/customers/${localStorage.customerId}/tickets/page/${page}`,
      options
    );
  }

  getAllTickets(page: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.get<Ticket[]>(
      `http://localhost:8080/tickets/page/${page}`,
      options
    );
  }

  deleteTicket(id: number) {
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    };

    return this.http.delete(`http://localhost:8080/tickets/${id}`, options);
  }
}
