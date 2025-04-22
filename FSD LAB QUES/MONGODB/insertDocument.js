const { MongoClient } = require('mongodb');

// MongoDB URI
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const client = new MongoClient(url);

// Name of the database and collection to be used
const dbName = 'myDatabase'; // Change this to the database name
const collectionName = 'myCollection'; // Change this to the collection name

async function insertDocument() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Select the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert a document into the collection
    const insertResult = await collection.insertOne({ name: "Jane Doe", age: 25 });
    console.log(`Inserted document with _id: ${insertResult.insertedId}`);

  } catch (error) {
    console.error("Error inserting document:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

insertDocument().catch(console.error);
