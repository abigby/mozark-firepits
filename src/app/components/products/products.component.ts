import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FirepitsService } from '../../services/firepits.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent],
  providers: [FirepitsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  @Input()
  public productId:number | undefined;

  public productDetails:any = null;

  constructor() { }

  public ngOnInit(): void {}
}
