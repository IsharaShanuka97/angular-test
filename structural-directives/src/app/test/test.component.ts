import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  template: `
     <h2>{{"Hello " + name}}</h2>
     <button (click)="fireEvent()">Send codevolution</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }

}
