import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { CartService } from '../../core/services/cart.service'
import { AuthserviceService } from '../../core/services/authservice.service'
import { Utilites } from '../../shared/utilities'

require('../../../assets/js/pages/dashboard.js')

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private utilites:Utilites,
                private router : Router,
               private cartService : CartService,
               private authService : AuthserviceService ) { 
                
      }

  ngOnInit() {
    this.getCart();
    this.cartService.setCartItemNum(0);
  }
  getCart (){
    this.cartService.getCart();
  }
  togglePreference (){
    var body = {
        userDetails: this.authService.getUserDetails(),
    };
    this.cartService.togglePreference(body);  
  }
  logout() {
    this.authService.logout();
  }
  gotoCart(){
    this.router.navigate(['/checkout/cart']);
  }
  changePassword(){
    this.router.navigate(['/auth/change-pwd']);
  }
}




