import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { HomecomponentComponent } from './pages/homecomponent/homecomponent.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomecomponentComponent },
  { path: 'items', component: ItemsComponent },
  { path: '**', component: HomecomponentComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
