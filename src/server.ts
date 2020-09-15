import express from "express";

const app = express();

import routes from "./routes";

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Web server running on port 3333!"));
