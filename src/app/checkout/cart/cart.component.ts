import { Component, OnInit } from '@angular/core';

import { CartService } from '../../core/services/cart.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  emptyCart = false;
  cartItems = null;
  subTotal = 0;
  constructor(private cartService : CartService , 
              private router:Router) { }

  ngOnInit() {
    this.getCart();
  }

  getCart () {
    let this_ = this;
    this.cartService.getCart1().subscribe( response => {
      if(response['cartItems'] == null){
        this.emptyCart = true;
      } else{
        if(response['cartItems'] == null){
            this.cartService.cartItemNum = 0;
        } else{
            this.cartService.cartItemNum = 0;
            for(var i = 0 ; i < response['cartItems'].length ; i++) {
                this.cartService.cartItemNum += response['cartItems'][i].quantity;
            }
            this.cartService.cartItems = response['cartItems'];
        }
        this.emptyCart = false;
        this.cartItems = response['cartItems'];
        this.subTotal = 0;
        for(var i = 0 ; i < this.cartItems.length ; i++) {
            this.cartItems[i].totalPrice = this.cartItems[i].price * this.cartItems[i].quantity;
            this.subTotal += this.cartItems[i].totalPrice;
        }
      }
      this.cartService.cartNotif();
    })
  }

  increaseCartItem (cartItem) {
    var menuItems = {};
    var menuId = cartItem.menuId;
    for(var i = 0 ; i < this.cartItems.length ; i++){
        if(this.cartItems[i].menuId == menuId) {
            menuItems[menuId] = this.cartItems[i].quantity + 1;
        } else{
            menuItems[this.cartService.cartItems[i].menuId] = this.cartService.cartItems[i].quantity;
        }
    }
    var body = {
        menuItems: menuItems
    };

    this.cartService.updateCart(body).subscribe( response => {
      this.getCart();
    })

  }
  decreaseCartItem (cartItem) {
    var menuItems = {};
    var menuId = cartItem.menuId;
    for(var i = 0 ; i < this.cartItems.length ; i++){
        if(this.cartItems[i].menuId == menuId) {
            menuItems[menuId] = this.cartItems[i].quantity - 1;
        } else{
            menuItems[this.cartService.cartItems[i].menuId] = this.cartService.cartItems[i].quantity;
        }
    }
    var body = {
        menuItems: menuItems
    };
    this.cartService.updateCart(body).subscribe( response => {
      this.getCart();
    })
  }
  deleteCartItem (cartItem) {
    var menuItems = {};
    var menuId = cartItem.menuId;
    for(var i = 0 ; i < this.cartItems.length ; i++){
        if(this.cartItems[i].menuId == menuId) {
            //menuItems[menuId] = $scope.cartItems[i].quantity - 1;
        } else{
            menuItems[this.cartService.cartItems[i].menuId] = this.cartService.cartItems[i].quantity;
        }
    }
    var body = {
        menuItems: menuItems
    };
    this.cartService.updateCart(body).subscribe( response => {
      this.getCart();
    })
  }
  completeOrder () {
    if(this.emptyCart){
        
    }
    this.cartService.placeOrder().subscribe( response => {
      this.router.navigate(['order', response['orderId']]);
    })
 
  }
  continueShopping(){
    this.router.navigate(['/']);
  }
}

