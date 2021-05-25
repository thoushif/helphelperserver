const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://helphelper-dev:helphelper@cluster0.9dafc.mongodb.net/moviesDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
//data schema and model
const movieSchema = {
  title: String,
  genre: String,
  year: String,
};

const Movie = mongoose.model("Movie", movieSchema);

const blogpostDb = async () => {
  /*
     * put code to call database here
     * this can be either an ORM model or code to call the database through a driver or querybuilder
     * i.e.-
      INSERT INTO blogposts (user_name, blogpost_body)
      VALUES (user, content);
    */
  //   console.log(db);
  let data;
  Movie.find().then((movies) => (data = movies));
  console.log(data);
  return data;
  //just a dummy return as we aren't calling db right now
};

module.exports = {
  blogpostDb,
};
