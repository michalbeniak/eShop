using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace foodPowder.Models
{
    public class Product
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string ImagePath { get; set; }
        public Guid Guid { get; set; }
        public int Quantity { get; set; }

        public Product()
        {

        }

        public Product(string name, string description, double price, string imagePath, string guid)
        {
            Name = name;
            Description = description;
            Price = Math.Round(price,2);
            ImagePath = imagePath;
            Guid = Guid.Parse(guid);
            Quantity = 1;
        }

        public Product(DataRow dataRow)
        {
            Name = dataRow["name"].ToString();
            Description = dataRow["description"].ToString();
            Price = Math.Round(Convert.ToDouble(dataRow["price"]),2);
            ImagePath = dataRow["imagePath"].ToString();
            Guid = Guid.Parse(dataRow["guid"].ToString());
            Quantity = 1;

        }
    }
}
