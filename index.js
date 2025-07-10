import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import { PORT } from "./config/environment.js";
import userRoutes from "./routes/userRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
// Load environment variables
dotenv.config();
import orgRoutes from "./routes/orgRoutes.js";
// Initialize app
const app = express();

// Middleware configuration
app.use(cors({
  origin: "*", // Allow all domains
  credentials: true // Allow cookies and credentials
}));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Default route
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Backend Running On port: ${PORT} Server</h1>`);
});

app.use("/api", userRoutes);
app.use("/api/organizations", orgRoutes);
app.use("/api/roles", roleRoutes);

// Start the server and connect to the database
const port = PORT || 3600;
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on port ${port}`);
});
