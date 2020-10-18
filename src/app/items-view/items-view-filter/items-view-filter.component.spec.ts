import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsViewFilterComponent } from './items-view-filter.component';

describe('ItemsViewFilterComponent', () => {
  let component: ItemsViewFilterComponent;
  let fixture: ComponentFixture<ItemsViewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsViewFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsViewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
