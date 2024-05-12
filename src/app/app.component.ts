import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FirepitsService } from './services/firepits.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, RouterLink, HeaderComponent, FooterComponent, HomeComponent, ProductsComponent, AboutComponent, ContactComponent],
  providers: [FirepitsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mozark-firepits';
}
