import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/user';
import { UserGet } from 'src/app/Models/userGet';
import { UserService } from 'src/app/Services/user.service';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';

@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['./adm-users.component.css'],
})
export class AdmUsersComponent {
  currentPage: number = 0;
  users: UserGet[] = [];
  error: string = null;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAllUsers(this.currentPage).subscribe(
      (response: any) => {
        this.users = response;
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }

  displayedColumns: string[] = ['id', 'email', 'authority', 'removeButton'];

  onPaginateChange(event) {
    this.currentPage = event.pageIndex;
    this.getAll();
  }

  addData() {
    const dialogRef = this.dialog.open(AddAdminComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Add Admin closed');
    });
  }

  removeData(id: number) {
    const dialogRef = this.dialog.open(RemoveUserComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Remove User closed');
    });
  }
}
