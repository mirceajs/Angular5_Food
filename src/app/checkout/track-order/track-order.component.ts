import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { CartService } from '../../core/services/cart.service'

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {
  orderId = null;
  cartItems = null;
  subTotal = 0;
  accepted = null;
  preparing = null;
  dispatched = null;
  delivered = null;
  constructor(private route:ActivatedRoute, private cartService : CartService) { }

  ngOnInit() {
    this.getOrderId();
    this.getCart();
    this.trackOrder();
  }
  getOrderId () {
    
    this.orderId = this.route.snapshot.params['orderId'];
  }
  getCart () {
    this.cartService.getCart1().subscribe(response => {
     this.cartItems = response['cartItems'];
       this.subTotal = 0;
        for(var i = 0 ; i <this.cartItems.length ; i++) {
           this.cartItems[i].totalPrice =this.cartItems[i].price *this.cartItems[i].quantity;
           this.subTotal +=this.cartItems[i].totalPrice;
        }
    })

  }
  trackOrder () {
  }
}
