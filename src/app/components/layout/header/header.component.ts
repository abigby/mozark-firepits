import { AfterViewInit, Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FirepitsService } from '../../../services/firepits.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ScrollToModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menuValue:boolean = false;
  public menu_icon:string = 'bi bi-list';
  public offsetScrollY:number = 0;

  constructor(
    private firepitsService:FirepitsService,
    @Inject(DOCUMENT) private document: Document,
    // @Inject(WINDOW) private window: Window
  ) { }

  @HostListener("window:scroll", ['$event'])
  public onWindowScroll():void {
    this.offsetScrollY = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  }

  public openMenu():void {
    this.menuValue =! this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  public closeMenu():void {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  public returnHome():void {
    this.firepitsService.returnHome();
  }

  public scrollToTarget(target:string):void {
    this.closeMenu();
    this.firepitsService.triggerScrollTo(target);
  }
}
