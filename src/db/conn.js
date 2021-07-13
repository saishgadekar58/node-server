const mongoose = require("mongoose");
DB =
  "mongodb+srv://saishgadekar:35059076@cluster0.hnkmj.mongodb.net/nodedynamic?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("success atlas");
  })
  .catch((error) => {
    console.log(error);
  });
