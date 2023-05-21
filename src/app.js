import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import listsRoutes from "./routes/lists.routes.js";
import usersRoutes from "./routes/users.routes.js";
import itemsRoutes from "./routes/items.routes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
//CAUTION> cors policy isn't restricte to a defined domain
app.use(cors());

const welcomeText =
  "<div> <h1>my cinema API</h1> <p>See instructions on the Github repository:</p><p><strong>https://github.com/icabulo/</strong></p></div>";

app.get("/", (req, res) => {
  res.send(welcomeText);
});

app.use("/api/favs", listsRoutes);
app.use("/user", usersRoutes);
app.use("/item", itemsRoutes);

app.listen(PORT, () => {
  console.log(`Server Initialized on PORT:${PORT}`);
});
