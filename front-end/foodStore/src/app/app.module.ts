import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { ProductComponent } from './components/other/products/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CommunicatorService } from './services/communicator/communicator.service';
import { ThreeProductsComponent } from './components/other/products/three-products/three-products.component';
import { ProductsList } from './models/products-list';
import { Product } from './models/product';
import { BackgroundComponent } from './components/other/background/background.component';
import { ParagraphComponent } from './components/other/paragraph/paragraph.component';
import { MenuComponent } from './components/main/menu/menu.component';
import { MyCartComponent } from './components/other/my-cart/my-cart.component';
import { HomeComponentComponent } from './components/main/home-component/home-component.component';
import { ProductDetailComponentComponent } from './components/main/product-detail-component/product-detail-component.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { CartDetailComponentComponent } from './components/main/cart-detail-component/cart-detail-component.component';
import { ContactComponentComponent } from './components/main/contact-component/contact-component.component';
import { FaqComponentComponent } from './components/main/faq-component/faq-component.component';
import { FaqQuestionComponent } from './components/other/faq-question/faq-question.component';
import { ShopComponentComponent } from './components/main/shop-component/shop-component.component';
import { ProductShopComponent } from './components/other/products/product-shop/product-shop.component';
import { BlogComponentComponent } from './components/main/blog-component/blog-component.component';
import { BlogComponent } from './components/other/blog/blog.component';
import { CartServiceService } from './services/cartService/cart-service.service';
import { CartService } from './services/storeService/cart.service';
import { ProductCartComponent } from './components/other/products/product-cart/product-cart.component';
import { CheckoutComponent } from './components/other/checkoutFlow/checkout/checkout.component';
import { CartBasketComponent } from './components/other/checkoutFlow/cart-basket/cart-basket.component';
import { SummaryComponent } from './components/other/checkoutFlow/summary/summary.component';
import { PaymentComponent } from './components/other/checkoutFlow/payment/payment.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'shop', component: ShopComponentComponent },
  { path: 'blog', component: BlogComponentComponent }, 
  { path: 'faq', component: FaqComponentComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'cart', component: CartDetailComponentComponent },
  { path: 'product/:id', component: ProductDetailComponentComponent},
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ThreeProductsComponent,
    BackgroundComponent,
    ParagraphComponent,
    MenuComponent,
    MyCartComponent,
    HomeComponentComponent,
    ProductDetailComponentComponent,
    FooterComponent,
    CartDetailComponentComponent,
    ContactComponentComponent,
    FaqComponentComponent,
    FaqQuestionComponent,
    ShopComponentComponent,
    ProductShopComponent,
    BlogComponentComponent,
    BlogComponent,
    ProductCartComponent,
    CheckoutComponent,
    CartBasketComponent,
    SummaryComponent,
    PaymentComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule
  ],
  providers: [CommunicatorService, CartServiceService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
