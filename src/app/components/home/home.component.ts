import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FirepitsService } from '../../services/firepits.service';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { ProductsComponent } from '../products/products.component';
import { HttpClientModule } from '@angular/common/http';
import * as AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    HeroComponent
  ],
  providers: [FirepitsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private ngxSpinnerService: NgxSpinnerService,
    public dialog:MatDialog
  ) { }

  public ngOnInit(): void {
    this.ngxSpinnerService.show();
  }

  public ngAfterViewInit():void { 
    AOS.init();
  }

  public openDialog(id:number):void {
    const detailsDialogRef = this.dialog.open(
      ProductsComponent, {
        data: id
      }
    );

    detailsDialogRef.afterClosed().subscribe(result => {
      if(result.navigate) {
        window.open(result.url, '_blank');
      }
    });
  }

  public shopNow(url:string):void {
    window.open(url, '_blank');
  }

}
