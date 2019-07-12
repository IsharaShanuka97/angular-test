import { Component, OnInit, Input,  Output,  } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  template: `
     <h2>{{name}}</h2>
     <h2>{{ name | lowercase }}</h2>
     <h2> {{ name | uppercase }}</h2>
     <h2> {{ message | uppercase }}</h2>
     <h2>{{ message | slice:start:6 }}</h2>
     <h2> {{ person | json }}</h2>

     <h2>{{5.678 | number:'2.4-10' }}</h2>

     <h2>{{0.25 | percent:digitInfo }}</h2>

     <h2>{{ 100 | currency:'$' }}</h2>

     <h2>{{ date | date }}</h2>
     <h2> {{ date | date:'fullDate' }}</h2>
     <h2>{{ date | date:'shortDate' }}</h2>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="Ishara";
  public message =  "Welcome to Codevolution";
  public person={
    "firstName" : "Ayesha",
    "lastName" : "Gamage"
  }

  public date = new Date();

 

  constructor() { }

  ngOnInit() {
  }

  
}
