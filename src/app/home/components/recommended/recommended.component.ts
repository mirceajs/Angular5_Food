import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from '../../../core/services/menu.service'
import { Utilites } from '../../../shared/utilities'


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  count = 1;
  recommendedItem = null;
  constructor( private utilites:Utilites,
               private menuService: MenuService, 
               private router: Router) {
                
    }

  ngOnInit() {
    this.getRecommendation();
    this.getMenuItems();
    this.count = 1;
    this.utilites.loadScript('../../../../assets/js/pages/menu.js');
  }

  getRecommendation () {
    this.menuService.getRecommendedMenuItem().subscribe( response => {
        this.recommendedItem = response['recommendedItem'];
        var ingredientList = "";
        for(var key in response['recommendedItem'].ingredients){
            ingredientList += key + ", ";
        }
        ingredientList = ingredientList.slice(0, ingredientList.length - 2);
        this.recommendedItem.ingredientList = ingredientList;
    })
  }
  getMenuItems = function() {
    this.menuService.getMenuItems();
  
  }
  selectMenuItem (menuItem) {
    this.menuService.setSelectedMenuItem(menuItem);
    this.router.navigate(['menu/item', menuItem.menuId]);

  }

  placeOrder = function() {
    this.menuService.updateCart();
  }

    increaseCount = function() {
        this.count++;
    }

    decreaseCount = function() {
        if(this.count > 1){
            this.count--;
        }
    }

    addToCart(recommendedItem) {
        this.menuService.addToCart(this.count, recommendedItem);
    }

    getSafeLink(item){
        return item?item.imageLink:'';
    }
}



