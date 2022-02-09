import { environment } from './../environments/environment';

import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, Input, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
interface Student {
  id: number,
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modeView = 'mapk';
  post = {
    title: 'Title',
    isClicked: true
  }
  courses = [1, 2, 3];
  tweet = {
    likesCount: 10,
    isActive: true
  }
  onChangeCourse(eventArgs) {
    console.log('Courses Changed', eventArgs);
  }
  constructor() {

  }





}
