import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CartService } from '../../core/services/cart.service'
import { AuthserviceService } from '../../core/services/authservice.service'
import { Utilites } from '../../shared/utilities'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  successMessage = "";
  constructor( private utilites:Utilites,
    private router : Router,
    private cartService : CartService,
    private authService : AuthserviceService) { }

  ngOnInit() {
    if(this.authService.isAuthorized("ROLE_USE"))   this.router.navigate(['recommended']);
    this.utilites.loadScript('../../../assets/vendor/js/jquery.nicescroll.min.js');
    this.utilites.loadScript('../../../assets/js/pages/login.js');
  }
  
  login () {
    this.authService.authenticationError = false;
    this.authService.loadingAccount = true;
    this.authService.login(
        this.username,
        this.password,
    );
  }

  
}

