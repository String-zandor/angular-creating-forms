import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss']
})
export class ProfilerComponent {
  users: User[] = [];

  user: User = new Profile();

  addUser(): void {
    this.users.push(this.user);
    this.user = new Profile();
    console.log(this.users);
  }
}

class Profile implements User {
  email = '';
  name = '';
  bio = '';
  active = false;
}