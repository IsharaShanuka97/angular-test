import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"Ishara", "age":21},
      {"id":2, "name":"Ayesha", "age":20},
      {"id":3, "name":"Janaka", "age":23},
      {"id":4, "name":"Asanka", "age":24}
  
    ]
  }
}
