import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  @Input() ticket: Ticket;
}
