import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts/contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about/about.component';
import { ProductsComponent } from './components/products/products/products.component';
import { UsefulComponent } from './components/useful/useful.component';


const routes: Routes = [
  {path: '' , component: HeaderComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'useful', component: UsefulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
