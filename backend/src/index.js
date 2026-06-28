const express=require("express");
const products = require("./data/products");



const app = express();
const PORT = 5000;

// Middleware 
app.use(express.json());




//get all products
app.get('/products',(req,res)=>{
  res.status(200).send(products);
})




//get specific product
app.get('/products/:id',(req,res)=>{
   const id=Number(req.params.id);
  const index = products.findIndex(product => product.id === id);
  if (index === -1) {
  return res.status(404).json({
    message: "Product not found"
  });
}
res.status(200).send(products[index]);
})



//post new product
app.post('/products',(req,res)=>{
  const new_product=req.body;
  products.push(new_product);
  res.status(201).json({message:"new product added",
                        product:new_product          
  });
});




//delete product
app.delete('/products/:id',(req,res)=>{

  const id=Number(req.params.id);
  const index = products.findIndex(product => product.id === id);
  if (index === -1) {
  return res.status(404).json({
    message: "Product not found"
  });
}
products.splice(index, 1);
res.status(200).json({
  message: "Product deleted successfully"
});
});




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});