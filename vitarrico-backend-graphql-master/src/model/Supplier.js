import { Schema, model, Types } from "mongoose";

const Supplier = new Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    location:{
        type: String,
        required: true,
        trim: true
    },
    experience:{
        type: Number,
        required: true,
        trim: true
    },
    business:{
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
    versionKey:false
}

);

export default model('supplier', Supplier);