import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import connectDB from './config/database';
import types from './graphql/schemas';
import resolvers from './graphql/graphql-resolvers'

const app = express();
app.use(cors());

connectDB();

const schema = buildSchema(types);
app.use('/graphql', (req, res) =>
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true,
    })(req, res),
);

app.listen(5000, () => console.log('Server on http://localhost:5000/graphql'))
