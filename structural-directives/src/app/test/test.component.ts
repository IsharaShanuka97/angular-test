import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div *ngFor="let color of colors; index as i">
    <h2> {{i}} {{color}}</h2>
  </div>
        
              
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public colors = ["red", "green", "yellow", "blue"];

  constructor() { }

  ngOnInit() {
  }

}
