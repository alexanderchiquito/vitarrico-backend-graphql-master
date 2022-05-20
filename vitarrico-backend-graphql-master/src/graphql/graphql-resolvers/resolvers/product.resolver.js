import Product from "../../../model/Product";

const productResolver = {
    products: async () => await Product.find(),
    createProduct: async ({ product }) => {
        if (!product) {
          throw new Error('Fields required!');
        }
        try {
          const newProduct = new Product(product)
          return await newProduct.save();
        } catch (error) {
          console.log(error);
        }
      },
      deleteProduct: async ({ id }) =>{
        await Product.findByIdAndDelete(id);
        return 'Product Delete';
      },
      updateProduct: async ({ product, id }) =>{
        const newUpdateProduct = await Product.findByIdAndUpdate(id,{
          $set: product
        },{new: true})
        return newUpdateProduct
      }
}

export default productResolver;
