using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using foodPowder.Models;

namespace foodPowder.Interfaces
{
    public interface IProductProvider
    {
        Product GetProductById(string id);
        List<Product> GetFirstThreeProducts();
        List<Product> GetAllProducts();
        void SaveOrder(Order order);
    }
}