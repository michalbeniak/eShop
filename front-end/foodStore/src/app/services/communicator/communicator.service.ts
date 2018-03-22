import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product';
import { ProductsList } from '../../models/products-list';
import { ProductComponent } from '../../components/other/products/product/product.component';
import { AppComponent } from '../../app.component';
import { HomeComponentComponent } from '../../components/main/home-component/home-component.component';
import { ProductDetailComponentComponent } from '../../components/main/product-detail-component/product-detail-component.component';
import { ShopComponentComponent } from '../../components/main/shop-component/shop-component.component';
import { CartService } from '../storeService/cart.service';

@Injectable()
export class CommunicatorService {

  constructor(private http: HttpClient, private cart: CartService) { }


  passData(productDetailComponent:ProductDetailComponentComponent, id:string) {
    this.http.get('http://localhost:49649/Product/GetProduct?id=' + id)
      .subscribe(data => {
        let dataJson = JSON.parse(JSON.stringify(data));
        productDetailComponent.product = new Product(
          dataJson.Name, 
          dataJson.Description, 
          dataJson.Price, 
          dataJson.ImagePath, 
          dataJson.Guid,
          dataJson.Quantity
        );
        let splitPath = productDetailComponent.product.ImagePath.split(".");
        let resPath = splitPath[0] +"Detail" + "." + splitPath[1] ;
        productDetailComponent.product.ImagePath = resPath;
        
    });
  }

  passFirstThreeData(homeComponent: HomeComponentComponent) {
    this.http.get('http://localhost:49649/Product/GetFirstThreeProducts')
      .subscribe(data => {
        homeComponent.productList = new ProductsList(JSON.parse(JSON.stringify(data)));
    });
  }

  getAllProducts(shopComponent: ShopComponentComponent) {
    this.http.get('http://localhost:49649/Product/GetAllProducts')
      .subscribe(data => {
        shopComponent.productList = new ProductsList(JSON.parse(JSON.stringify(data)));
    });
  }

  saveOrder(contactDetails, productArray) {
    let contactDetailsJson = JSON.parse(JSON.stringify(contactDetails));
    let productArrayJson =JSON.parse(JSON.stringify(productArray));
    let shippingJson = JSON.parse(JSON.stringify(this.cart.shipping));
    let order ={
      "contactDetails":contactDetailsJson,
      "productsArray":productArrayJson,
      "shipping":shippingJson
    };

    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams().set('order', JSON.stringify(order));
    this.http
      .post('http://localhost:49649/Product/SaveOrder', body, { headers: myheader}).subscribe();   
      }
}
