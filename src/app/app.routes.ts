import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { LoginComponent } from './auth/login/login.component';

import { RecommendedComponent } from './home/components/recommended/recommended.component';
import { MenuComponent } from './home/components/menu/menu.component';
import { MenuitemComponent } from './home/components/menuitem/menuitem.component';
import { DummyComponent } from './home/components/dummy/dummy.component';
import { CartComponent } from './checkout/cart/cart.component';
import { TrackOrderComponent } from './checkout/track-order/track-order.component';
import { EventAuthGuardService } from './core/services/auth-guard.service'
export const routes: Routes = [
  { path: '', redirectTo:'auth/login',pathMatch: 'full'},
  { path: 'auth/change-pwd', component: ChangePasswordComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'checkout/cart', component: CartComponent, canActivate: [EventAuthGuardService] },
  { path: 'checkout/order/orderId', component: TrackOrderComponent, canActivate: [EventAuthGuardService]  },
  { path: 'recommended', component:RecommendedComponent, canActivate: [EventAuthGuardService]  },
  { path: 'menu/:menuName', component:MenuComponent, canActivate: [EventAuthGuardService]  }, 
  { path: 'dummy/:menuName', component:DummyComponent, canActivate: [EventAuthGuardService]  }, 
  { path: 'menu/item/:itemId', component:MenuitemComponent, canActivate: [EventAuthGuardService]  }, 

];


