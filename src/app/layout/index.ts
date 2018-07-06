import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


// Modules
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,

    // sub components
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [

    RouterModule
  ]
})
export class LayoutModule {}
