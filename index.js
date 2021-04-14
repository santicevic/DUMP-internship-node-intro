const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

const PORT = 3001;

app.use(cors());

app.use("/api", router);

app.use((req, res) => res.status(404).send());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
