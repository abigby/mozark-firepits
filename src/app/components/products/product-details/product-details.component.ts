import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { FirepitsService } from '../../../services/firepits.service';
import * as _ from 'lodash';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule,  MatDialogTitle, MatDialogContent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  public product:any;

  public firepit:any;
  public productsData:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public firepitservice:FirepitsService
  ) { }

  get getProducts() {
    return this.firepitservice.firePitsSignal();
  }

  public ngOnInit(): void {
    this.productsData = this.firepitservice.firePitsSignal();
    this.firepit = this.productsData.default.filter(
      (product:any) => {
        return product.id == _.trim(this.data);
      }
    ).map((product:any) => {
      product.description = product.description.replace(/\\n/g, '');
      return product;
    });
  }
}
