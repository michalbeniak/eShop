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
        private string connectionString = ConfigurationManager.ConnectionStrings["meatPowder"].ConnectionString;

        public ProductProvider()
        {
            //string constr = ConfigurationManager.ConnectionStrings["meatPowder"].ConnectionString; 

            using (MySqlConnection connection = new MySqlConnection(connectionString))
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
        public void SaveOrder(Order order)
        {
            Guid orderGuid = Guid.NewGuid();

            string insertContactCommand = string.Format("INSERT INTO meatpowder.orders(" +
                            "FirstName, LastName, Email, NumberTel, Street, " +
                            "NumberHouse, City, ZipCode, Country, OrderID,ShippingMethod, Total) " +
                    "VALUES('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}','{10}', '{11}');",
                    order.contactDetails.FirstName,
                    order.contactDetails.LastName,
                    order.contactDetails.Email,
                    order.contactDetails.NumberTel,
                    order.contactDetails.Street,
                    order.contactDetails.NumberHouse,
                    order.contactDetails.City,
                    order.contactDetails.ZipCode,
                    order.contactDetails.Country,
                    orderGuid.ToString(),
                    order.shipping.Method,
                    order.productsArray.GetTotal());


            string insertOrdersCommand = "INSERT INTO meatpowder.orders_product(ProductName, ProductGuid, OrderGuid, Price, Quantity) VALUES " + GetProductInsertCommand(order.productsArray, orderGuid);

            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                connection.Open();
                using (MySqlCommand command = new MySqlCommand(insertContactCommand, connection))
                {
                    command.ExecuteNonQuery();
                }
                using (MySqlCommand command2 = new MySqlCommand(insertOrdersCommand, connection))
                {
                    command2.ExecuteNonQuery();
                }
                connection.Close();
            }

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

        public string GetProductInsertCommand(ProductsArray products, Guid orderGuid) {
            string res = "";
            foreach (Product product in products.ProductsList) {
                res += string.Format("('{0}', '{1}', '{2}', '{3}', '{4}')", product.Name, product.Guid, orderGuid.ToString(), product.Price.ToString().Replace(",","."), product.Quantity);
                if (products.ProductsList.IndexOf(product) != (products.ProductsList.Count -1)) {
                    res += ",";
                }
            }
            return res;
        }
    }


}