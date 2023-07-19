import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css'],
})
export class TicketsListComponent implements OnInit {
  currentPage: number = 0;
  tickets: Ticket[] = [];
  error: string = null;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ticketService.getAllCustomersTicket(this.currentPage).subscribe(
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
}
