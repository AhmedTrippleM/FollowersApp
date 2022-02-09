import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  names: BehaviorSubject<string[] | string> = new BehaviorSubject(['x', 'y']);
  constructor() { }
  addName(name: string) {
    this.names.next(name);
  }

}
