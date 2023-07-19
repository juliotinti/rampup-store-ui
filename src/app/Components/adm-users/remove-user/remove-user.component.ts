import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
})
export class RemoveUserComponent {
  error: string = null;

  constructor(
    private router: Router,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public userId: any,
    public dialogRef: MatDialogRef<RemoveUserComponent>
  ) {}

  deleteUser() {
    this.userService.adminDeleteUser(this.userId.id).subscribe(
      () => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate(['admin/users']));
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }
}
