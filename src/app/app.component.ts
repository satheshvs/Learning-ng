import { ChildComponent } from './child/child.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  pName: string;

  @ViewChild(ChildComponent) childView: ChildComponent;

  ngOnInit() {
  this.pName  = this.childView.cName;
  }













}
