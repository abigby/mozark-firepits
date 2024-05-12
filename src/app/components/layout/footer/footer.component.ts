import { Component, OnInit } from '@angular/core';
import { FirepitsService } from '../../../services/firepits.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  providers: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  public currentYear:Number = new Date().getFullYear();

  constructor(
    private firepitsService:FirepitsService
  ) { }

  public ngOnInit():void { }

  public returnHome():void {
    // this.firepitsService.returnHome();
  }
}
