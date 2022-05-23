import { Schema, model, Types } from 'mongoose';

const User = new Schema({

    username:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    age:{
        type: Number,
        require: true,
        trim: true
    },
    country:{
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