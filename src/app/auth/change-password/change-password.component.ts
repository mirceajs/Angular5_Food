import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CartService } from '../../core/services/cart.service'
import { AuthserviceService } from '../../core/services/authservice.service'
import { Utilites } from '../../shared/utilities'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  successMessage = null;
  oldPassword = null;
  newPassword = null;
  newPasswordCopy = null;
  errorMessage = null;
  constructor( private utilites:Utilites,
	private router : Router,
    private cartService : CartService,
    private authService : AuthserviceService ) { 
		
	}

  ngOnInit() {
	this.utilites.loadScript('../../../assets/vendor/js/jquery.nicescroll.min.js');
	this.utilites.loadScript('../../../assets/js/pages/login.js');
  }

  changePassword () {
		this.successMessage = null;
		if(this.oldPassword == null || this.oldPassword == undefined || this.oldPassword == "") {
			this.errorMessage = "Old Password cannot be empty";
			return;
		}
		if(this.newPassword == null || this.newPassword == undefined || this.newPassword == "") {
			this.errorMessage = "New Password cannot be empty";
			return;
		}
		if(this.newPassword != this.newPasswordCopy) {
			this.errorMessage = "New password donot match";
			return;
		}
		var body = {
			oldPassword: this.oldPassword,
			newPassword: this.newPassword
        };
		
		this.authService.changePassword(body).subscribe( response => {
			if(response['code'] == 0){
				this.errorMessage = null;
				this.oldPassword = null;
				this.newPassword = null;
				this.newPasswordCopy = null;
				this.successMessage = "Your password has been changed successfully";
			} else if(response['code'] == 1 && response['message'] == "Old password is incorrect") {
				this.errorMessage = "Your old password is incorrect";
			}
		});
	}
}
