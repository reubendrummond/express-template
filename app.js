require("module-alias/register"); // alias imports
require("dotenv").config();
const app = require("express")();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
const cors = require("cors");
const clientPort = 3000
app.use(cors({ origin: `http://localhost:${clientPort}` }));

OR

app.use(cors({ origin: true }));
*/

const apiRouter = require("./controllers/api");
app.use("api", apiRouter);

app.get("/", (req, res) => {
  res.status(200).json({ data: "root" });
});

// error handling
const ErrorHandler = require("./middleware/ErrorHandler");
app.use(ErrorHandler.logError);
app.use(ErrorHandler.sendError);
app.use(ErrorHandler.invalidPath);

const port = process.env.PORT || 6900;
app.listen(port, async () => {
  console.log(
    `Listening on at http://localhost:${port} in ${process.env.NODE_ENV} environment. \n ^+C to cancel.`
  );
});
