import { Component, OnInit } from '@angular/core';
import { ItemFilter } from '../models/item-filter.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-view-filter',
  templateUrl: './items-view-filter.component.html',
  styleUrls: ['./items-view-filter.component.css']
})
export class ItemsViewFilterComponent implements OnInit {

  @Output()
  filterCriteriaEvent = new EventEmitter<ItemFilter>();

  model: ItemFilter;

  constructor() { }

  ngOnInit(): void {
    this.model = new ItemFilter();
  }

  onSubmit(): void {
    const filter = Object.assign({}, this.model);
    this.filterCriteriaEvent.emit(filter);
  }
}
