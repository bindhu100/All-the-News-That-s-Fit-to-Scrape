
// Require mongoose
var mongoose = require("mongoose");
var Note = require("./Note");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "Note"
  }]
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;






// var mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// var Schema = mongoose.Schema;

// // Using the Schema constructor, create a new UserSchema object
// // This is similar to a Sequelize model
// var ArticleSchema = new Schema({
//   // `Headline` is required and of type String
//   headline: {
//     type: String,
//     required: true
//   },

// // `Summary` is required and of type String
// summary: {
//   type: String
// },

// // `url` is required and of type String

// url: {
//   type: String
// }, 

// isSaved: {
//   type: Boolean,
//   default: false
// },

//   // `note` is an object that stores a Note id
//   // The ref property links the ObjectId to the Note model
//   // This allows us to populate the Article with an associated Note
//   note: {
//     type: Schema.Types.ObjectId,
//     ref: "Note"
//   }
// });

// // This creates our model from the above schema, using mongoose's model method
// var Article = mongoose.model("Article", ArticleSchema);

// // Export the Article model
// module.exports = Article;

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

