import express from "express";
import fetchdb from "./api/fetchdb.js";
import findLink from "./api/findLink.js";
import cors from 'cors';

const app = express();
app.use(express.json());

// CORS Middleware
app.use(cors());


app.get("/", (req, res) => {res.send("Backend UrlShortener is running");});
app.post("/api/shorten", fetchdb);
app.get("/:alias", findLink);

export default app;