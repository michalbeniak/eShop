import { ContactDetails } from "./contact-details";
import { ProductsList } from "./products-list";
import { Shipping } from "./shipping";

export class Order {

    contactDetails: ContactDetails;
    productsArray: ProductsList;
    shipping: Shipping;
}
