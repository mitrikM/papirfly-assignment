import { Component, Input,  OnInit } from '@angular/core';
import { IItem } from '../../intefaces/IItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  // @Input() items$!: Observable<IItem[]>
  @Input() items$!: Observable<IItem[]>;

  // currentCol= ""
  // currentDirection:ISortingInterface = {order: 'asc'}
  // destroy$ = new Subject<void>()
  // constructor(private tableService: TableService) {
  // }

  constructor() {}

  ngOnInit() {
    // this.tableService.getCurrentDirection()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(value => this.currentDirection.order = value.order)
    // this.tableService.getCurrentCol()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(value => this.currentCol=value)
  }

  // ngOnDestroy() {
  //   this.destroy$.next()
  //   this.destroy$.complete()
  // }

  // sort(column:string){
  //   if(this.currentCol !== column){
  //     this.tableService.setCurrentCol(column)
  //     // this.items$.map
  //   }
  // }
}
