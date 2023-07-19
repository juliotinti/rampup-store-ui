import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-solve-ticket',
  templateUrl: './solve-ticket.component.html',
  styleUrls: ['./solve-ticket.component.css'],
})
export class SolveTicketComponent {
  error: string = null;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    @Inject(MAT_DIALOG_DATA) public ticketId: any,
    public dialogRef: MatDialogRef<SolveTicketComponent>
  ) {}

  solveTicket() {
    this.ticketService.deleteTicket(this.ticketId.id).subscribe(
      () => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate(['admin/tickets']));
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }
}
