import { Component, OnInit, NgModule } from '@angular/core';
import { IStudent } from '../model/istudent';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit {
  students: IStudent[];

  constructor() {}

  ngOnInit(): void {
    fetch('../data/students.json')
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((json) => {
        // console.log(json);
        // this.students = json;
      });
    console.log(this.students);
  }
}
