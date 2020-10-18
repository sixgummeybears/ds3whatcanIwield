import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../models/weapon.model';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {

  @Input()
  weapons: Weapon[];

  @Input()
  weaponCategory: string;

  constructor() { }

  ngOnInit(): void {
  }

}
