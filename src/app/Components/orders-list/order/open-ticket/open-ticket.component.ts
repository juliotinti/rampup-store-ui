import { Component, Input, Inject } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { TicketDTO } from 'src/app/Models/ticketDTO';
import { TicketService } from 'src/app/Services/ticket.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css'],
})
export class OpenTicketComponent {
  ticket: TicketDTO = {
    id: null,
    message: '',
    orderId: null,
  };
  error: string = null;

  constructor(
    private ticketService: TicketService,
    @Inject(MAT_DIALOG_DATA) public orderId: any,
    private router: Router
  ) {}

  submitForm() {
    this.ticket.orderId = this.orderId.id;
    this.ticketService.insertTicket(this.orderId.id, this.ticket).subscribe(
      () => {
        this.router.navigate(['tickets']);
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }
}
