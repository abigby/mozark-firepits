import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'home', 
        title:"Home", 
        loadComponent:() => import('./components/home/home.component').then(
            (m) => m.HomeComponent
        )
    },
    { 
        path: 'products', 
        title:"Products", 
        loadComponent:() => import('./components/products/products.component').then(
        (m) => m.ProductsComponent) 
    },
    { 
        path: 'about', 
        title:"About",
        loadComponent:() => import('./components/about/about.component').then(
        (m) => m.AboutComponent)  
    },
    { 
        path: 'contact', 
        title:"Contact", 
        loadComponent:() => import('./components/contact/contact.component').then(
            (m) => m.ContactComponent)
    },
    { 
        path: '', 
        pathMatch:'full', 
        redirectTo:'home' 
    }
];
