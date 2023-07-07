import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import { TableComponent } from './components/table/table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import {ClickOutsideDirective} from "./directives/clickOutside.directive";
import { NewCustomerModalComponent } from './components/new-customer-modal/new-customer-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    TableComponent,
    SidebarComponent,
    DropdownMenuComponent,
    ClickOutsideDirective,
    NewCustomerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
