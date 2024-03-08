import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
export async function testrun() {
  try {
    await client.connect();
    const db = client.db("Users");
    return db.collection("users");
  } catch (error) {
    console.log("Error connecting to database");
  }
}
