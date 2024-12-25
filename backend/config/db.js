import { MongoClient } from "mongodb";
import 'dotenv/config'
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB_NAME;
export const client = new MongoClient(url);


export const connectDB = async () => {
    await client.connect();
    console.log(`connected to ${url}, db:${dbName}`);
}

