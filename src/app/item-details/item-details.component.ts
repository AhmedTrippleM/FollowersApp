import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnDestroy, OnChanges, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {
  @Input() set title(name: string) {
    // console.log(name);
    this.myTitle = name;
  }
  myTitle: string;
  // @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnDestroy() {
    // console.log('on Destroy');
  }
  ngAfterViewInit(): void {
    // console.log('After View Init');
  }
  ngAfterContentChecked // this.colors = ['red', 'blue', 'green'];
    (): void {
    // console.log('After Content Checked');
  }
  ngAfterContentInit(): void {
    // console.log('ng After Content Init');
  }

  ngOnInit(): void {
    // console.log('on Init');
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes are ', changes);
  }

  log(event: KeyboardEvent) {
    // console.log(event);
  }

}
