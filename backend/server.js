const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { port, dbUrl, dbName } = require("./config");

const app = express();

const indexRouter = require("./routes/index");
const exampleRouter = require("./routes/example");

app.use("/", indexRouter);
app.use("/example", exampleRouter);

app.use(bodyParser.json());

// mongoose.connect(`${dbUrl}${dbName}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.listen(port, () => console.log(`App listening on port ${port}!`));
