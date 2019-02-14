import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
data = {
  student: [
    {
      id: '01',
      name: 'sai',
      age: '24'
    },
    {
      id: '02',
      name: 'kumar',
      age: '23'
    },
    {
      id: '03',
      name: 'puli',
      age: '25'
    },
    {
      id: '04',
      name: 'sri',
      age: '22'
    }
    ]
};
  student = 'Students';
   ngOnInit() {
  }
}
