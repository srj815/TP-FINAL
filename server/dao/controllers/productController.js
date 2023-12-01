const Product = require("../models/productModel")

const createProduct  = async (product) =>{
    const newProduct = new Product(product)
    try{
        return await  newProduct.save()
    }catch(err){
        console.error(err)
    }
}

const getProductById = async (pid) =>{
    return await Product.findById(pid)
}

const getProducts = async () => {
    return await Product.find({})
}

const deleteProduct = async (pid) =>{
    try{
        const deletedProduct = await Product.findByIdAndDelete(pid)
        if(deleteProduct){
            return {ok: true, deletedProduct}
        }
        else{
            return {error: 'Producto no encontrado'}
        }
    }
    catch(err){
        return {error: 'id no valido'}
    }

}

const updateProduct = async (req, res) => {
    const productId = req.params.pid;
    const updatedProductData = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, { new: true });
        res.status(200).json({ ok: true, product: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: 'Error al actualizar el producto' });
    }
};



module.exports = {createProduct, getProducts, deleteProduct, getProductById, updateProduct}