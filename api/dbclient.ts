import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_URI ?? 'mongodb+srv://arhdbq:Pekanbaru00@@cluster0.t73le4n.mongodb.net/?retryWrites=true&w=majority';
const dbclient = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1
});

export {
    dbclient
}
