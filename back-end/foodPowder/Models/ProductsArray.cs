using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace foodPowder.Models
{
    public class ProductsArray
    {

        public List<Product> ProductsList { get; set; }
        public double Total { get; set; }

        public string GetTotal() {
            SetTotal();
            return Total.ToString().Replace(",",".");
        }
        public void SetTotal() {
            double sum = 0;
            foreach (var product in ProductsList)
            {
                sum += product.Price * product.Quantity;
            }
            Total = sum;
        }
    }
}