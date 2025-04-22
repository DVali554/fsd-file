const { MongoClient } = require('mongodb');

// MongoDB URI
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const client = new MongoClient(url);

// Name of the database and collection
const dbName = 'myDatabase'; // Change this to the database name
const collectionName = 'myCollection'; // Change this to the collection name

async function deleteDocument() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Select the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Delete the document with the name "Jane Doe"
    const deleteResult = await collection.deleteOne({ name: "Jane Doe" });
    console.log(`Deleted ${deleteResult.deletedCount} document(s)`);

  } catch (error) {
    console.error("Error deleting document:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

deleteDocument().catch(console.error);
