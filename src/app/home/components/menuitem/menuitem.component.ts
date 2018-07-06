import { Component, OnInit } from '@angular/core';


import { MenuService } from '../../../core/services/menu.service'
import { CartService } from '../../../core/services/cart.service'
import { Utilites } from '../../../shared/utilities'


@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
  constructor( private utilites:Utilites,
               private menuService: MenuService,
               private cartService : CartService ) {

   }

  count = 0;
  added = false;
  selectedMenuItem = null;
  ngOnInit() {
    this.setItemInfo();
    let _this = this;
    $(".confirm-adding").on("click", function () {
        _this.cartService.cartNotif();
        $(this).addClass("confirmed");
    });
    this.utilites.loadScript('../../../../assets/js/pages/menu.js');
  }
  setItemInfo() {
    this.count = 1;
    this.added = false;
    this.selectedMenuItem = this.menuService.selectedMenuItem;
    if(this.selectedMenuItem == null || this.selectedMenuItem == undefined) {
        return;
    }
    var ingredientList = "";
    for(var key in this.selectedMenuItem.ingredients){
        ingredientList += key + ", ";
    }
    ingredientList = ingredientList.slice(0, ingredientList.length - 2);
    this.selectedMenuItem.ingredientList = ingredientList;
  }
  increaseCount () {
    this.count++;
  }
  decreaseCount () {
    if(this.count > 1){
        this.count--;
    }
  }
  addToCart(selectedMenuItem){
    this.menuService.addToCart(this.count, selectedMenuItem);
  }
}
