import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../../../core/services/menu.service'
import { CartService } from '../../../core/services/cart.service'
import { Utilites } from '../../../shared/utilities'

require('../../../../assets/js/pages/menu.js')
require('../../../../assets/js/pages/dashboard.js')


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectedCuisineEnum: string;
  selectedCuisine: string;
  selectedFoodCategory = "ALL";
  menuItems = null;
  paginationIndex:number;
  sub = null;
  constructor( private route:ActivatedRoute, private menuService: MenuService,
               private cartService : CartService,
               private utilites:Utilites, private router: Router ) {  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadData();
    });
    
  }
  loadData(){
    this.getSelectedCuisine();
    this.menuService.setSelectedFoodCategory("ALL");
    this.getMenuItems();

  }
  getSelectedCuisine () {
    this.selectedCuisineEnum = this.route.snapshot.params['menuName'].toUpperCase();
    this.selectedCuisine = this.utilites.toTitleCase(this.selectedCuisineEnum);
  }
  getMenuItems () {
    var foodCategory = null;
    if(!!this.menuService.selectedFoodCategory){
       foodCategory = this.menuService.selectedFoodCategory.toUpperCase();
        if(this.menuService.selectedFoodCategory == 'ALL'){
            foodCategory = null;
        }
        this.menuService.getMenuItems1({cuisine: this.selectedCuisineEnum, foodCategory: foodCategory,index: 0}).subscribe( response => {
          this.menuItems = response['menuItems'];
          this.paginationIndex = 0;
        })
    }
  }
  loadMoreMenuItems () {
    var foodCategory = null;
    if(!!this.menuService.selectedFoodCategory) {
        foodCategory = this.menuService.selectedFoodCategory.toUpperCase();
        if(this.menuService.selectedFoodCategory == 'ALL') {
            foodCategory = null;
        }
        this.paginationIndex++;

        this.menuService.getMenuItems1({cuisine: this.selectedCuisineEnum, foodCategory: foodCategory,index: this.paginationIndex}).subscribe( response => {
            this.menuItems = this.menuItems.concat(response['menuItems']);
        })
    }
  }
  filter () {
    this.menuService.setSelectedFoodCategory(this.selectedFoodCategory);
    this.getMenuItems();
  }
  selectMenuItem (menuItem) {
    this.menuService.setSelectedMenuItem(menuItem);
    console.log(menuItem)
    this.router.navigate(['menu/item', menuItem.itemId]);
  }

}
