import { Component, Input, Inject } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { TicketDTO } from 'src/app/Models/ticketDTO';
import { TicketService } from 'src/app/Services/ticket.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OpenTicketComponent } from './open-ticket/open-ticket.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  @Input() order: Order;

  constructor(public dialog: MatDialog) {}

  openTicket(id: number) {
    const dialogRef = this.dialog.open(OpenTicketComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Opening ticket closed');
    });
  }
}
