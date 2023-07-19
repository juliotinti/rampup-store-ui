import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css'],
})
export class DeleteAccountComponent {
  constructor(public dialog: MatDialog) {}

  deleteUser() {
    const dialogRef = this.dialog.open(DeleteUserComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Delete user closed');
    });
  }
}
