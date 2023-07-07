import { Component, OnInit} from '@angular/core';

import {IItem} from "../../intefaces/IItem";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";
import {ModalService} from "../../services/modal.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  items$!: Observable<IItem[]>
  // private _subscription!: Subscription
  searchString = new BehaviorSubject<string>('');
  isModalOpened$!: Observable<boolean>




  constructor(
    private _databaseService: DatabaseService,
    private modalService: ModalService,
  ) {
  }

  ngOnInit() {
    this.isModalOpened$ = this.modalService.isModalOpened$
    this._databaseService.setItems()
    this.items$ = combineLatest([
      this.searchString,
      this._databaseService.items$,
    ]).pipe(
      map(([searchString, item]) =>
        item.filter(x =>
          x.name.toLowerCase().includes(searchString) ||
          x.id.toString().includes(searchString)
        )
      )
    )
  }

  openModal() {
    this.modalService.openModal()
  }

  onSearchUpdate(searchString: string) {
    this.searchString.next(searchString)
  }


}
