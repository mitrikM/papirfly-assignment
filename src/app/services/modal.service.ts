import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalOpened = new BehaviorSubject(false);
  get isModalOpened$(): Observable<boolean> {
    return this.isModalOpened.asObservable();
  }
  constructor() {}
  openModal() {
    this.isModalOpened.next(true);
  }
  closeModal() {
    this.isModalOpened.next(false);
  }
}
