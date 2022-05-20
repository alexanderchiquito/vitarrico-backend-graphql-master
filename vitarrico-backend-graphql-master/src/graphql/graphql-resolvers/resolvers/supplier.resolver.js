import Supplier from "../../../model/Supplier";

const supplierResolver = {
    suppliers: async () => await Supplier.find(),
    createSupplier: async ({ supplier }) => {
        if (!supplier){
            throw new Error('Fields Required!');
        }
        try{
            const newSupplier = new Supplier(supplier)
            return await newSupplier.save();
        }catch (error){
            console.log(error);
        }
    },
    deleteSupplier: async ({ id }) =>{
        await Supplier.findByIdAndDelete(id);
        return 'Supplier Delete';
    },
    updateSupplier: async({ supplier, id }) => {
        const newUpdateSupplier = await Supplier.findByIdAndUpdate(id,{
            $set: supplier
        },{new: true})
        return newUpdateSupplier
    }
};

export default supplierResolver;