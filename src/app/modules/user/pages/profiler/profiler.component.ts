import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss']
})
export class ProfilerComponent {
  profileForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    bio: [''],
    active: [false]
  })

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.profileForm.value);
  }

  clear(): void {
    this.profileForm.reset();
  }

}
