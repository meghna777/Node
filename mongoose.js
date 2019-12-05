const validator = require("validator");
const mongoose = require("mongoose");
const mongooseConnect = "mongodb://localhost:27017/task-manager-api";
mongoose.connect(mongooseConnect, {
  useNewUrlParser: true,
  useCreateIndex: true
});

//Define First Model
const User = mongoose.model("User", {
  name: { type: String, default: "Anonymous" },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age is a positive number");
      }
    }
  }
  // phone: {
  //   type: Number,
  //   validate(value) {
  //     if (!this.validator.isMobilePhone(value, any)) {
  //       console.log("invalid");
  //       throw new Error("Incorrect Number");
  //     }
  //   }
  // }
});

//Creating Instance of model

const user = new User({
  email: "MOLLY.moo@gmail.com",
  age: 20
  //phone: 7823
});
user
  .save()
  .then(result => {
    setTimeout(() => {
      console.log(user, "Data successfully added");
    }, 1);
  })
  .catch(error => {
    console.log(error.message);
  });

const user2 = new User({
  name: "Meghna",
  email: "MOLLY.moo@gmail.com"
});
user2
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  });
// const Task = mongoose.model("Task", {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// });

// const task = new Task({
//   description: 123,
//   completed: false
// });
// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch(error => {
//     console.log(error);
//   });
