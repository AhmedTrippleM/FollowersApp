import { Component, Directive, OnInit, Input, ViewChild, ViewEncapsulation, OnDestroy, OnChanges, AfterViewInit, AfterContentInit, AfterContentChecked, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterViewInit {
  myTitle = 'Title Parent';
  @ViewChild('childRef') myChildComponent: ItemDetailsComponent;
  @ViewChildren('childRef') childs: QueryList<ItemDetailsComponent>;

  // @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngAfterViewInit(): void {
    console.log('After View Init', this.childs.toArray());
  }


}




