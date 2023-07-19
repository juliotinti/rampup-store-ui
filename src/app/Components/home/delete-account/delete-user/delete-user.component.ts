import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  error: string = null;

  constructor(private router: Router, private userService: UserService) {}

  deleteUser() {
    this.userService.deleteUser().subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (response: any) => {
        this.error = response.error.message;
        console.log(this.error);
      }
    );
  }
}
