import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() cName = '';

 @Output() dectectedChangeInChildTextBox = new EventEmitter<string>();

onChange(data) {
  this.dectectedChangeInChildTextBox.emit(data);
}




}
