import { ChildComponent } from './child/child.component';
import { Component, ViewChild, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {
  @Input() pName;

  // @ViewChild(ChildComponent) childView: ChildComponent;

}










