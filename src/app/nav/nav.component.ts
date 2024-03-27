import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import IdsIcon from 'ids-enterprise-wc/components/ids-icon/ids-icon';
import { IdsModuleNavDisplayMode } from 'ids-enterprise-wc/components/ids-module-nav/ids-module-nav-common';
import { Context, NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('moduleNavRef', { read: ElementRef }) moduleNavRef;
  @ViewChild('moduleNavBarRef', { read: ElementRef }) moduleNavBarRef;
  @ViewChild('moduleNavTriggerBtnRef', { read: ElementRef }) moduleNavTriggerBtnRef;
  
  public displayMode: IdsModuleNavDisplayMode = this.isWithinMobileBreakpoint() ? false : 'expanded';
  public filterable = true;
  public pinned = true;
  public responsive = false;
  public mainTitle = "Unknown";
 
  private cont: Context = {} as Context; // latest received context.

  private isWithinMobileBreakpoint() {
    return this.moduleNavRef?.nativeElement.isWithinMobileBreakpoint() || false;
  }

  private updateDisplayMode(mode: IdsModuleNavDisplayMode) {
    if (this.displayMode !== mode) {
      this.displayMode = mode;
      this.moduleNavRef.nativeElement.displayMode = mode;
      //console.info('Module Nav Display Mode Updated:', mode || 'hidden');
    }
  }

  constructor(private navService: NavService,
            private cd: ChangeDetectorRef) {
    this.navService.getContext().subscribe((data: Context) => {
      this.cont = data;
      if (data['mainTitle']) {
        this.mainTitle = data['mainTitle'];
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.moduleNavBarRef.nativeElement.target = this.moduleNavTriggerBtnRef.nativeElement;
    this.updateDisplayMode(this.isWithinMobileBreakpoint() ? false : 'collapsed');
    this.cd.detectChanges();
  }

  handleDisplayModeChange(e: CustomEvent) {
    const newDisplayMode = e.detail.displayMode;
   // console.info('Module Nav "displaymodechange" event handled: ', newDisplayMode);
    this.updateDisplayMode(newDisplayMode);
  }

  handleHamburgerButtonClick() {
    //console.info('Hamburger Button click');
    const alternateMode = this.isWithinMobileBreakpoint() ? false : 'collapsed';
    this.updateDisplayMode(this.displayMode === 'expanded' ? alternateMode : 'expanded');
  }

  handleSelected(e: CustomEvent) {
    //console.info(`Module Nav Item "${(e.target as any).textContent.trim()}" was selected.`);
  }
}
