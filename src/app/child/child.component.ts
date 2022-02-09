import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  ngOnInit() {
    this.names.subscribe((name: string) => {
      this.list = [...this.list, ...name];
    });
  }
  @Input() names: BehaviorSubject<string[] | string>;
  list: string[] = [];
  constructor(private cdRef: ChangeDetectorRef) {
    this.cdRef.reattach();
  }

  refresh() {
    this.cdRef.detectChanges();
  }




}
