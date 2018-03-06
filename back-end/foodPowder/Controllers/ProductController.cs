﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using foodPowder.Interfaces;


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
    }
}