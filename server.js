const express = require("express");
require("./app/mongoose");
const cors = require("cors");
const path = require("path");
const errorHandlers = require("./app/handlers/errorHandlers");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.use(require("./app/routes/user"));
app.use(require("./app/routes/form"));

if (process.env.ENV !== "DEVELOPMENT") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

const server = app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

require("./app/socket")(server);
