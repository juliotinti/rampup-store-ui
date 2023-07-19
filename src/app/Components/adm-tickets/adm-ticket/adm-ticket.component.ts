import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';
import { SolveTicketComponent } from '../solve-ticket/solve-ticket.component';

@Component({
  selector: 'app-adm-ticket',
  templateUrl: './adm-ticket.component.html',
  styleUrls: ['./adm-ticket.component.css'],
})
export class AdmTicketComponent {
  @Input() ticket: Ticket;
  error: string = null;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    public dialog: MatDialog
  ) {}

  solve() {
    const dialogRef = this.dialog.open(SolveTicketComponent, {
      data: { id: this.ticket.id },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Solve ticket closed');
    });
  }
}
