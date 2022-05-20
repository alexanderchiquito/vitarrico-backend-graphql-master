import {connect} from 'mongoose';

const connectDB = async () => {
    try {
        await connect('mongodb+srv://alexander:123Alex2022@cluster0.wscup.mongodb.net/vitarrico', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
          });
          console.log('DB Connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;
