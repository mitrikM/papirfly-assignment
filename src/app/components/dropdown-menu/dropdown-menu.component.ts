import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IItem } from '../../intefaces/IItem';
import { TableService } from '../../services/table.service';
import { IDropdownItem } from '../../intefaces/IDropdownItem';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit, OnDestroy {
  @Input() item!: IItem;
  currentItem!: IItem | null;
  private destroy$ = new Subject<void>();
  //currentDropdownItem!:IDropdownItem
  dropdownItems: IDropdownItem[] = [
    {
      active: false,
      name: 'Option 1',
    },
    {
      active: false,
      name: 'Option 2',
    },
    {
      active: false,
      name: 'Option 3',
    },
  ];
  constructor(private tableService: TableService) {}

  // @HostListener('document:click')
  // clickout() {
  //   if (this.currentItem) {
  //     this.closeDropDownMenu()
  //   }
  // }
  ngOnInit() {
    this.tableService
      .getCurrentItem()
      .pipe(takeUntil(this.destroy$))
      .subscribe((i) => {
        this.currentItem = i;
      });
  }
  toggleDropDownMenu(item: IItem, event: MouseEvent) {
    event.stopPropagation();
    const currentItem = this.tableService.getCurrentItem().getValue();
    if (currentItem && currentItem !== item) {
      currentItem.showDropdown = false;
    }
    item.showDropdown = !item.showDropdown;
    this.tableService.setCurrentItem(item);
  }

  clickedOutside() {
    const currentItem = this.tableService.getCurrentItem().getValue();
    if (currentItem && currentItem.showDropdown) {
      // Check if currentItem's showDropdown is true
      currentItem.showDropdown = false;
    }
  }

  skipPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  chooseDropdownItem(item: IDropdownItem, event: MouseEvent) {
    event.stopPropagation();
    // this.dropdownItems.forEach((item)=>{
    //   if(item.active){
    //     item.active=false
    //   }
    // })
    //item.active=true

    item.active = !item.active;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
