import { Component } from '@angular/core';

import { CartService } from './core/services/cart.service'
import { AuthserviceService } from './core/services/authservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private cartService : CartService,
               private authService : AuthserviceService ){}
  
}
