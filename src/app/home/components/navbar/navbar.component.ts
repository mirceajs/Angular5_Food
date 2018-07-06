import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CartService } from '../../../core/services/cart.service'
import { AuthserviceService } from '../../../core/services/authservice.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  allCuisines = null;
  cuisines = null;
  startSliceIndex = 0;
  
  constructor( private router : Router,
    private cartService : CartService,
    private authService : AuthserviceService) { 

    }

  ngOnInit() {

    this.getCuisines();
    this.getFoodCategories();
  }
  getCuisines() {
    this.cartService.getCuisines().subscribe(response => {
      var cuisines = response["availableCuisines"].map(function(value) {
        return value.toLowerCase();
      });
      this.allCuisines = cuisines;
      this.startSliceIndex = 0;

      this.cuisines = cuisines.slice(this.startSliceIndex, this.startSliceIndex + 7); 
    })
  
  }
  
  getFoodCategories() {
    this.cartService.selectedFoodCategory = 'ALL';
    this.cartService.getFoodCategories();
    
  }
  
  gotoMenu(menuname){
   // this.router.navigate(['/dummy', menuname] );
   this.router.navigate(['/menu', menuname] );
  }

  gotoRecommend(){
    this.router.navigate(['/recommended']);
  }

  goLeft() {
    if(this.startSliceIndex == 0) {
        return;
    }
    this.startSliceIndex--;
    this.cuisines = this.allCuisines.slice(this.startSliceIndex, this.startSliceIndex + 7);
  }
  
  goRight() {
    if((this.startSliceIndex + 7) >= this.allCuisines.length){
        return;
    }
    this.startSliceIndex++;
    this.cuisines = this.allCuisines.slice(this.startSliceIndex, this.startSliceIndex + 7);
  }
}


