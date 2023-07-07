import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.responsiveService.checkScreenSize();
  }

  isExpanded: boolean | null = null;
  isMobile: boolean | null = null;

  destroy$ = new Subject<void>();

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.checkScreenSize();
    this.responsiveService
      .getIsExpanded()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => (this.isExpanded = value));
    this.responsiveService
      .getIsMobile()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => (this.isMobile = value));
  }
  clickOutside() {
    if (this.isMobile && this.isExpanded) {
      this.responsiveService.isExpanded$.next(false);
    }
  }
  closeSidebar() {
    this.responsiveService.isExpanded$.next(false);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
