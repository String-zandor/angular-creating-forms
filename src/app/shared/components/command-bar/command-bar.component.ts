import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {

  @Output() add = new EventEmitter();

  @Output() deleteAll = new EventEmitter();

  requestAdd(): void {
    this.add.emit();
  }

  requestDeleteAll(): void {
    this.deleteAll.emit();
  }

}
