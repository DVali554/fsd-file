const { MongoClient } = require('mongodb');

// MongoDB URI
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const client = new MongoClient(url);

// Name of the database to be used
const dbName = 'myDatabase'; // Change this to your desired database name
const collectionName = 'myCollection'; // Change this to your desired collection name

async function createDatabase() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Create the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert a document to create the database
    const insertResult = await collection.insertOne({ name: "John Doe", age: 30 });
    console.log(`Inserted document with _id: ${insertResult.insertedId}`);

  } catch (error) {
    console.error("Error creating database:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

createDatabase().catch(console.error);
