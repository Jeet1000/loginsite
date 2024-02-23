const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string

// Database Name
const dbName = 'arnab'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(function (err) {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB successfully');

    // Access a specific database
    const db = client.db(dbName);

    // Now you can perform operations on the database

    // For example, you can query documents from a collection
    const collection = db.collection('abc'); // Replace with your collection name

    collection.find({}).toArray(function (err, docs) {
        if (err) {
            console.error('Error querying collection:', err);
            return;
        }

        console.log('Documents in the collection:', docs);

        // Close the connection when done
        client.close();
    });
});
