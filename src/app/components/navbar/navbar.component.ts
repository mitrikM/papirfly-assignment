import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.responsiveService.checkScreenSize();
  }

  isMobile: boolean | null = null;

  destroy$ = new Subject<void>();

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    this.responsiveService.checkScreenSize();
    this.responsiveService
      .getIsMobile()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => (this.isMobile = value));
  }
  toggleExpand(event: MouseEvent) {
    event.stopPropagation();
    this.responsiveService.toggleExpand();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
