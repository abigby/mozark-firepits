import { Injectable, WritableSignal, signal } from '@angular/core';
import  * as firepits from '../databases/db.json';
import { Router } from '@angular/router';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class FirepitsService {

  public firePitsSignal:WritableSignal<Array<any>> = signal<Array<any>>(firepits);
  public cartSignal:WritableSignal<Array<any>> = signal<Array<any>>([]);
  public firePitsData: any = null;
  
  private firepitsURL:string = '../databases/db.json';

  constructor(
    private router: Router,
    private scrollToService:ScrollToService
  ) { }

  public getAllFirePits():any {
    return this.firePitsSignal();
  }

  public addToCart(product:any):void {
    this.cartSignal.set([...this.cartSignal(), product]);
  }

  public removeFromCart(id:number):void {
    this.cartSignal.set(this.cartSignal().filter((item, i) => i !== id ));
  }

  public emptyCart():void {
    this.cartSignal.set([]);
  }

  public returnHome():void {
    this.router.navigateByUrl('home');
  }

  public triggerScrollTo(targetRef:string):void {
    const config: ScrollToConfigOptions  ={
      target: targetRef 
    }
    this.scrollToService.scrollTo(config);
  }
}
