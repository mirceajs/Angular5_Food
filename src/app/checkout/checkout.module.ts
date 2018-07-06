import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { TrackOrderComponent } from './track-order/track-order.component';

import { CheckoutRoutes as routes } from './checkout.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [CartComponent, TrackOrderComponent]
})
export class CheckoutModule { }
