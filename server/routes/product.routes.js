const ProductController = require("../controllers/products.controller");

module.exports = (app) =>{
    app.post("/api/products", ProductController.createProduct)
    app.get("/api/products", ProductController.displayProducts)
    app.get('/api/products/:id' , ProductController.displayOne)
    app.put("/api/products/:id", ProductController.updateOne)
    app.delete("/api/products/:id", ProductController.deleteOne)
}


