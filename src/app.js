import express from "express";
import morgan from "morgan";
import cors from "cors";
const bp = require("body-parser");
import clientsRoute from "./routes/clients";
const app = express();
require("dotenv").config();

app.set("port", process.env.PORT || 8000);
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/clients", clientsRoute);

export default app;