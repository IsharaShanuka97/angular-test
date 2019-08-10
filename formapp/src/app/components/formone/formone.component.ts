import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {

  constructor() { }

  user = {
    username : "Ishara",
    email : "ishara@gmail.com",
    password : ""
  }

  ngOnInit() {
  }

  onSubmit(formdata : NgForm){
    console.log(this.user);
  }





}
