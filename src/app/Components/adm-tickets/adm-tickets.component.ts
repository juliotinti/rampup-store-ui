import { Component } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-adm-tickets',
  templateUrl: './adm-tickets.component.html',
  styleUrls: ['./adm-tickets.component.css'],
})
export class AdmTicketsComponent {
  currentPage: number = 0;
  tickets: Ticket[] = [];
  error: string = null;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ticketService.getAllTickets(this.currentPage).subscribe(
      (response: any) => {
        this.tickets = response;
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }

  onPaginateChange(event) {
    this.currentPage = event.pageIndex;
    this.findAll();
  }

  solve() {}
}
