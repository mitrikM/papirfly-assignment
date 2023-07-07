import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IItem } from '../intefaces/IItem';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  currentItem$ = new BehaviorSubject<IItem | null>(null);

  // currentCol$=new BehaviorSubject<string>('')
  // currentDirection$ = new BehaviorSubject<ISortingInterface>({order:'asc'})
  constructor() {}

  // setCurrentCol(col: string){
  //   this.currentCol$.next(col)
  // }
  //
  // getCurrentCol(){
  //   return this.currentCol$
  // }
  //
  // getCurrentDirection(){
  //   return this.currentDirection$
  // }
  // setDirection(col: string){
  //   this.currentDirection$.value.order==='asc'?this.currentDirection$.next({order:'dsc'}):this.currentDirection$.next({order:'asc'})
  // }

  setCurrentItem(item: IItem) {
    this.currentItem$.next(item);
  }
  getCurrentItem() {
    return this.currentItem$;
  }
}
