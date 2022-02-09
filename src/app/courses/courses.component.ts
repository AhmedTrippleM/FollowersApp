import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  @Input() isClicked: boolean;
  @Output() change = new EventEmitter();

  onClick() {
    this.isClicked = !this.isClicked;
    this.change.emit({ newValue: this.isClicked });
  }
  course = {
    title: 'Angular Course',
    students: 23152,
    rate: 4.6589,
    price: 496.52,
    releaseDate: new Date(2020, 10, 12)
  }
  text = 'Hello mr ahmed how  your familiy';
  title: string;

}
