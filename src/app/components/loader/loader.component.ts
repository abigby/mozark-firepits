import { Component, OnInit } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgxSpinnerModule],
  providers: [NgxSpinnerService],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) { }

  public ngOnInit(): void {
    this.ngxSpinnerService.show();
  }
}
