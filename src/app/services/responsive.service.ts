import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile$ = new BehaviorSubject<boolean>(false);
  isExpanded$ = new BehaviorSubject<boolean>(true);
  constructor() {}
  checkScreenSize() {
    if (window.innerWidth < 900) {
      this.isMobile$.next(true);
      this.isExpanded$.next(false);
    } else {
      this.isMobile$.next(false);
      this.isExpanded$.next(true);
    }
  }
  toggleExpand(): void {
    this.isExpanded$.next(!this.isExpanded$.value);
  }
  getIsMobile() {
    return this.isMobile$;
  }
  getIsExpanded() {
    return this.isExpanded$;
  }
}
