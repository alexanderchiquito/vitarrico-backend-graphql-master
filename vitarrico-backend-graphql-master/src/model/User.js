import { Schema, model, Types } from 'mongoose';

const User = new Schema({

    name:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim: true
    }


},

{
    timestamps: true,
    versionKey: false
}
);

export default model('user', User);