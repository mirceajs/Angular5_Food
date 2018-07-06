import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from '../../shared/config'
import * as $ from 'jquery'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems;
  public cartItemNum;
  public foodCategories = null;
  public  selectedFoodCategory = '';
  constructor( private http: HttpClient ) { }

  getCart1(){
    return this.http.get(global.siteUrl + 'engine/menu/getCart');
  }
  getCart(){
    this.http.get(global.siteUrl + 'engine/menu/getCart').subscribe( response => {
      if(response["cartItems"] == null){
        this.cartItemNum = 0;
      } else{
        this.cartItemNum = 0;
        for(var i = 0 ; i < response["cartItems"].length ; i++) {
          this.cartItemNum += response["cartItems"][i].quantity;
      }
      this.cartItems = response["cartItems"];
    }
    this.cartNotif();
    })
  }
  updateCart(body){
    return this.http.post(global.siteUrl + 'engine/menu/updateCart', body);
  }
  getCuisines(){
    return this.http.get(global.siteUrl + 'engine/menu/getAvailableCuisines');
  }
  getFoodCategories(){
    this.http.get(global.siteUrl + 'engine/menu/getAvailableFoodCategories')
     .subscribe(response => {
      this.foodCategories = [];
      this.foodCategories.push('ALL');
      this.foodCategories = this.foodCategories.concat(response["availableFoodCategories"]);
  })
  }
  placeOrder(){
    return this.http.post(global.siteUrl + 'engine/order/placeOrder', {})
  }
  togglePreference(body)
  {
    this.http.post(global.siteUrl + 'engine/updateUserDetails', body)
    .subscribe(response => {
    });
  }
  setCartItemNum( n ){
    this.cartItemNum = n;
  }

  cartNotif () {
    var cartElmnt = $(".cart-icon .value");
    cartElmnt.css("visibility", "visible");
    if (this.cartItemNum > 0) {
        cartElmnt.text(this.cartItemNum);
        cartElmnt.css("visibility", "visible").addClass("animated bounce");
    } else {
        cartElmnt.text("");
        cartElmnt.css("visibility", "hidden").removeClass("animated bounce");
    }
  }
}
