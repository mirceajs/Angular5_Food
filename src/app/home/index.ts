import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Components
import { HomeComponent } from './home.component';
// Navbar components
import { NavbarComponent } from './components/navbar/navbar.component'

// Menu components
import { RecommendedComponent } from './components/recommended/recommended.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';
import { DummyComponent } from './components/dummy/dummy.component';
// Routes
import { HomeRoutes as routes } from './home.routes';


@NgModule({
  declarations: [
    // components
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    MenuitemComponent,
    RecommendedComponent,
    DummyComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    MenuitemComponent,
    DummyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  ]
})
export class HomeModule {}
