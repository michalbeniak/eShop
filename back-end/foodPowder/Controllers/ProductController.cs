using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using foodPowder.Interfaces;
using Newtonsoft;
using foodPowder.Models;

namespace foodPowder.Controllers
{


    public class ProductController : Controller
    {


        private readonly IProductProvider productProvider;

        public ProductController(IProductProvider productProvider)
        {
            this.productProvider = productProvider;
        }

        [HttpGet]
        public ActionResult GetProduct(string id)
        {
            return Json(productProvider.GetProductById(id), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetFirstThreeProducts()
        {
            return Json(productProvider.GetFirstThreeProducts(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetAllProducts()
        {
            return Json(productProvider.GetAllProducts(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void SaveOrder(string order)
        {
            Order orderObj=Newtonsoft.Json.JsonConvert.DeserializeObject<Order>(order);
            productProvider.SaveOrder(orderObj);
            Console.WriteLine(order);
            Console.WriteLine("JIHAA");
        }
    }
}