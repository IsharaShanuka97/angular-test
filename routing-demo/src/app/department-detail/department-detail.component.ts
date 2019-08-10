import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works! {{departmentId}}
    </p>
    <a (click)="goPrevious()">Previous</a> <br>
    <a (click)="goNext()">Next</a>
    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.departmentId = previousId;
    this.router.navigate(['/departments',previousId]);
    
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.departmentId = nextId;
    this.router.navigate(['/departments',nextId]);
    
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null ;
    this.router.navigate(['/departments', {id : selectedId}])
  }

}
