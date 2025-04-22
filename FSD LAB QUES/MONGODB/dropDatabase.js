const { MongoClient } = require('mongodb');

// MongoDB URI
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const client = new MongoClient(url);

// Name of the database to be dropped
const dbName = 'myDatabase'; // Change this to the database you want to drop

async function dropDatabase() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Select the database
    const db = client.db(dbName);

    // Drop the database
    const dropResult = await db.dropDatabase();
    console.log(`Database dropped: ${dropResult}`);

  } catch (error) {
    console.error("Error dropping database:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

dropDatabase().catch(console.error);
