const { MongoClient, ObjectID } = require("mongodb");
const connectionUrl = "mongodb://localhost:27017";
const databaseName = "task-manager-db";
const id = new ObjectID();
MongoClient.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Error occurred");
    }
    //create new database file
    const db = client.db(databaseName);
    //Insert one data

    // db.collection("users").insertOne(
    //   {
    //     name: "Meghna",
    //     email: "meghna.mathur@wedigtech.com"
    //   },
    //   (error, r) => {
    //     if (error) {
    //       return console.log("Unable to insert the data");
    //     }
    //     console.log(r.ops, r.insertedCount);
    //   }
    // );

    // // multiple inserting data

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       decription:
    //         "Inserts a single document into MongoDB. If documents passed in do not contain the _id field",
    //       completed: true
    //     },
    //     {
    //       decription: " If documents passed in do not contain the _id field",
    //       completed: false
    //     },
    //     {
    //       decription: " documents passed in do not contain the _id field",
    //       completed: true
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert multiple data");
    //     }
    //     console.log(result.insertedCount);
    //   }
    // );

    //Find data
    // db.collection("tasks")
    //   .find({ _id: new ObjectID("5db14b2c847bc81f382048f3") })
    //   .toArray((error, task) => {
    //     if (error) {
    //       return console.log("unable to find");
    //     }
    //     console.log("found in task");
    //   });
    // db.collection("tasks")
    //   .find({ completed: true })
    //   .toArray((error, completedTasks) => {
    //     if (error) {
    //       return console.log("Can't find multiple data");
    //     }
    //     console.log("multiple task");
    //   });

    //Update data
    // db.collection("tasks")
    //   .updateOne(
    //     { _id: new ObjectID("5db14b2c847bc81f382048f1") },
    //     {
    //       $set: {
    //         decription: "promise added"
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log("updated :");
    //   })
    //   .catch(reject => {
    //     console.log("rejected:");
    //   });

    //Delete Data
    // db.collection("users")
    //   .deleteOne({
    //     _id: new ObjectID("5db13f72f7b5d31d74841f0f")
    //   })
    //   .then(result => {
    //     console.log("successfully deleted", result.deletedCount);
    //   })
    //   .catch(reject => {
    //     console.log("rejected");
    //   });
    // db.collection("users")
    //   .deleteMany({ completed: true })
    //   .then(result => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch(reject => {
    //     console.log("rejected");
    //   });

    //Some other Operations
    // db.collection("users").aggregate(
    //   { _id: new ObjectID("5db13f72f7b5d31d74841f0e") },
    //   {
    //     $addFields: {
    //       age: 24,
    //       value: "nurios poris"
    //     }
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Error occured");
    //     }
    //     console.log("new user added");
    //   }
    // );
  }
);
// to avoid deprecation warning  ----- useUnifiedTopology: true
