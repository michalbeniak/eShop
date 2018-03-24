using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using foodPowder.Models;

namespace foodPowder.Models
{
    public class Order
    {
        public ContactDetails contactDetails { get; set; }
        public ProductsArray productsArray { get; set; }
        public Shipping shipping { get; set; }
    }
}