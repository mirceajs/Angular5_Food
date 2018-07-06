import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { global } from '../../shared/config'
import { CartService } from './cart.service';
import { Utilites } from '../../shared/utilities'
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  cartItemNum = 0;
  menuItems = null;
  cartItems = null;
  selectedMenuItem = null;
  selectedFoodCategory = "ALL";
  constructor( private http: HttpClient , 
               private cartService: CartService,
               private utilites:Utilites ) { }

  getRecommendedMenuItem(){
    return this.http.get(global.siteUrl + 'engine/menu/getRecommendedMenuItem');
  }
  getMenuItems() {
    let params = new HttpParams();
    params = params.append('index', '0');
    params = params.append('cuisine', "");
    params = params.append('size', '8');

    this.http.get(global.siteUrl + 'engine/menu/getMenuItems', {
      params: params })
      .subscribe( response => {
        this.menuItems = response['menuItems'].slice(0, 4);
      });
  }
  setSelectedMenuItem(menuItem){
    this.selectedMenuItem = menuItem;
  }
  setSelectedFoodCategory(str){
    this.selectedFoodCategory = str;
  }
  updateCart(){
    var body = {
      menuItems: {
          'item1': 1,
          'item2': 2
      }
    };
    this.http.post(global.siteUrl + 'engine/menu/updateCart', body, {})
    .subscribe( response => {
    },
    err => {
    }) 
  }
  addToCart(count, recommendedItem){
    this.cartItemNum = this.cartItemNum + count;
    var menuItems = {};
    var menuId = recommendedItem.itemId;
    var added = false;
    if(this.cartItems != null){
       
        for(var i = 0 ; i < this.cartItems.length ; i++){
            if(this.cartItems[i].menuId == menuId) {
                menuItems[menuId] = this.cartItems[i].quantity + count;
                added = true;
            } else{
                menuItems[this.cartItems[i].menuId] = this.cartItems[i].quantity;
            }
        }
    }
    if(added == false){
        menuItems[menuId] = count;
    }
    var body = {
        menuItems: menuItems
    };
    console.log(body);
    this.http.post(global.siteUrl + 'engine/menu/updateCart', body)
    .subscribe(response => {
        this.cartService.cartNotif();
        this.http.get(global.siteUrl + 'engine/menu/getCart')
        .subscribe( response => {
            
            if(response['cartItems'] == null){
                this.cartItemNum = 0;
            } else{
                this.cartItemNum = 0;
                for(var i = 0 ; i < response['cartItems'].length ; i++) {
                    this.cartItemNum += response['cartItems'][i].quantity;
                }
                this.cartItems = response['cartItems'];
            }
        });
    });
    }

    getMenuItems1(obj){
      let params = new HttpParams();
      params = params.append('cuisine', obj.cuisine);
      params = params.append('index', obj.index);
      params = params.append('size', '8');

      
      if(obj.foodCategory)
        params = params.append('foodCategories', this.utilites.toTitleCase(obj.foodCategory));
      else
        params = params.append('foodCategories', '');
      return this.http.get(global.siteUrl + 'engine/menu/getMenuItems', {
        params: params
     });
    }
}
