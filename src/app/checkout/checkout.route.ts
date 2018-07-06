import { CartComponent } from './cart/cart.component';
import { TrackOrderComponent } from './track-order/track-order.component';

export const CheckoutRoutes = [
    { path: '', redirectTo: 'cart', pathMatch: 'full' },
    { path: 'cart', component: CartComponent },
    { path: 'order/orderId', component: TrackOrderComponent },

  ];
  