import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil, tap } from 'rxjs';
import { IItem } from '../intefaces/IItem';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements OnDestroy {
  items$ = new BehaviorSubject<IItem[]>([]);
  private _destroy$ = new Subject<void>();

  constructor(private _http: HttpClient) {}

  setItems() {
    this.getAllItems()
      .pipe(takeUntil(this._destroy$))
      .subscribe((r) => {
        this.items$.next(r);
      });
  }

  private baseUrl: string = 'http://localhost:3000/items';
  getAllItems(): Observable<IItem[]> {
    return this._http.get<IItem[]>(this.baseUrl);
  }
  addNewItem(customForm: FormGroup) {
    return this._http
      .post(this.baseUrl, customForm)
      .pipe(
        tap(() => {
          this.setItems();
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
