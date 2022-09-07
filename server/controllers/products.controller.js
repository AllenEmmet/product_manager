
const Product= require("../models/products.model")



module.exports = {
    createProduct: (req, res) =>{
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err))
    
    },
    displayProducts: (req, res) =>{
        Product.find({})
            .then(products=> res.json(products))
            .catch(err => console.log(err))
    },
    displayOne: (req, res)=>{
        Product.findOne({_id: req.params.id})
            .then(product=>res.json(product))
            .catch(err=>console.log(err))
    },
    updateOne: (req, res) =>{
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        
            .then(updatedProduct=>res.json(updatedProduct))
            .catch(err=>console.log(err))
    },
    deleteOne: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation=> res.json(deleteConfirmation))
        .catch(err=>console.log(err))
    }


}

// different syntax of exporting 
// module.exports.displayOne = (req, res)=>{
//     Product.findOne({_id: req.params.id})
//         .then(product=>res.json(product))
//         .catch(err=>console.log(err))
// }