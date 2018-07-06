import { HomeComponent } from './home.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';
import { DummyComponent } from './components/dummy/dummy.component';

export const HomeRoutes = [
  { path: '',  redirectTo: 'recommended', pathMatch: 'full' },
  { path: 'recommended', component:RecommendedComponent },
  { path: 'menu/item/:itemId', component:MenuitemComponent }, 
  { path: 'menu/:menuName', component:MenuComponent }, 
  { path: 'dummy/:menuName', component:DummyComponent }, 
 
];
