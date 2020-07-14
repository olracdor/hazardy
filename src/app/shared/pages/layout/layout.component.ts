import {Component, ElementRef, HostBinding, NgZone, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AppConfig} from '../../../configs/app.config';
import {DashboardThemes} from './helper/helper.interface';
import {HelperService} from './helper/helper.service';



@Component({
  selector: 'app-layout',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './layout.template.html',
})
export class LayoutComponent implements OnInit {
  @HostBinding('class.nav-static') navStatic: boolean;
  @HostBinding('class.chat-sidebar-opened') chatOpened: boolean = false;
  @HostBinding('class.app') appClass: boolean = true;
  @HostBinding('class.sing-dashboard') singDashboardClass: boolean = true;
  @HostBinding('class.dashboard-light') get dashboardLight() {
    return this.helperService.dashboardTheme === DashboardThemes.LIGHT;
  }
  @HostBinding('class.dashboard-dark') get dashboardDark() {
    return this.helperService.dashboardTheme === DashboardThemes.DARK;
  }

  config: any;
  configFn: any;
  $sidebar: any;
  el: ElementRef;
  router: Router;
  @ViewChild('spinnerElement', {static: true}) spinnerElement: ElementRef;
  @ViewChild('routerComponent', {static: true}) routerComponent: ElementRef;

  constructor(config: AppConfig,
              el: ElementRef,
              router: Router,
              private renderer: Renderer2,
              private ngZone: NgZone,
              private helperService: HelperService
  ) {

    this.el = el;
    this.config = config.getConfig();
    this.configFn = config;
    this.router = router;
  }

  toggleSidebarListener(state): void {
    const toggleNavigation = state === 'static'
      ? this.toggleNavigationState
      : this.toggleNavigationCollapseState;
    toggleNavigation.apply(this);
    localStorage.setItem('nav-static', JSON.stringify(this.navStatic));
  }

  toggleChatListener(): void {
    
  }

  toggleNavigationState(): void {
    this.navStatic = !this.navStatic;
    if (!this.navStatic) {
      this.collapseNavigation();
    }
  }

  expandNavigation(): void {
   
  }

  collapseNavigation(): void {
    // this method only makes sense for non-static navigation state
    if (this.isNavigationStatic()
      && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) { return; }

  }

  /**
   * Check and set navigation collapse according to screen size and navigation state
   */
  checkNavigationState(): void {
    if (this.isNavigationStatic()) {
      if (this.configFn.isScreen('sm')
        || this.configFn.isScreen('xs') || this.configFn.isScreen('md')) {
        this.collapseNavigation();
      }
    } else {
      if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
        setTimeout(() => {
          this.collapseNavigation();
        }, this.config.settings.navCollapseTimeout);
      } else {
        this.collapseNavigation();
      }
    }
  }

  isNavigationStatic(): boolean {
    return this.navStatic === true;
  }

  toggleNavigationCollapseState(): void {
   
  }

  _sidebarMouseEnter(): void {
    if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
      this.expandNavigation();
    }
  }
  _sidebarMouseLeave(): void {
    if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
      this.collapseNavigation();
    }
  }

  enableSwipeCollapsing(): void {
    
  }

  collapseNavIfSmallScreen(): void {
    if (this.configFn.isScreen('xs')
      || this.configFn.isScreen('sm') || this.configFn.isScreen('md')) {
      this.collapseNavigation();
    }
  }

  ngOnInit(): void {
    
  }

  private _navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {

        // For simplicity we are going to turn opacity on / off
        // you could add/remove a class for more advanced styling
        // and enter/leave animation of the spinner
        this.renderer.setStyle(
          this.spinnerElement.nativeElement,
          'opacity',
          '1'
        );
        this.renderer.setStyle(
          this.routerComponent.nativeElement,
          'opacity',
          '0'
        );
      });
    }
    if (event instanceof NavigationEnd) {
      this._hideSpinner();
    }

    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._hideSpinner();
    }
    if (event instanceof NavigationError) {
      this._hideSpinner();
    }
  }

  private _hideSpinner(): void {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {

      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.setStyle(
        this.spinnerElement.nativeElement,
        'opacity',
        '0'
      );
      this.renderer.setStyle(
        this.routerComponent.nativeElement,
        'opacity',
        '1'
      );
    });
  }
}
