import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
        <h2>Employee List</h2>
        <ul *ngFor="let employee of employees">
          <li>{{employee.name}}</li>
        </ul>

        
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id":1, "name":"Ishara", "age":21},
    {"id":2, "name":"Ayesha", "age":20},
    {"id":3, "name":"Janaka", "age":23},
    {"id":4, "name":"Asanka", "age":24}

  ]

  constructor() { }

  ngOnInit() {
  }

}
