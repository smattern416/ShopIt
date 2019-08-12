import axios from "axios";

export default {
  // Gets all Products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the Product with the given id
  getProduct: function(query) {
    return axios.get("/api/products/" + query);
  },
  getItem: function(id) {
    console.log("API")
    return axios.get("/api/products/itemid/" + id);
  },
  // Deletes the Product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a Product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};
