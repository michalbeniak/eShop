using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using foodPowder.Interfaces;
using foodPowder.Models;
using MySql.Data.MySqlClient;

namespace foodPowder.Providers
{
    public class ProductProvider: IProductProvider
    {
        public DataTable productTable = new DataTable();

        public ProductProvider()
        {
            string constr = ConfigurationManager.ConnectionStrings["meatPowder"].ConnectionString;

            using (MySqlConnection connection = new MySqlConnection(constr))
            {
                using (MySqlCommand command = new MySqlCommand("SELECT * FROM meatPowder.product"))
                {
                    using (MySqlDataAdapter dataAdapter = new MySqlDataAdapter())
                    {
                        command.Connection = connection;
                        dataAdapter.SelectCommand = command;
                        dataAdapter.Fill(productTable);
                    }
                }
            }
        }

        public Product GetProductById(string id)
        {
            var results = from myRow in productTable.AsEnumerable()
                          where myRow.Field<string>("guid") == id
                          select myRow;
            if (results.Count() == 1) {
                return new Product(results.First());
            }

            return new Product();
        }

        public List<Product> GetFirstThreeProducts()
        {
            var results = (from myRow in productTable.AsEnumerable() select myRow).Take(3);
            List<Product> result = new List<Product>();
            if (results.Count() == 3)
            {
                foreach (DataRow product in results) {
                    result.Add(new Product(product));
                }
            }
            return result;

        }

        public List<Product> GetAllProducts()
        {

            var results = (from myRow in productTable.AsEnumerable() select myRow);
            List<Product> result = new List<Product>();
            foreach (DataRow product in results)
            {
                result.Add(new Product(product));
            }
            return result;

        }
    }


}