import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./services/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// CORS setup (allow only your UI domain) 
const allowedOrigins = process.env.CLIENT_ORIGINS.split(",");
app.use(
  cors({
    origin: (origin, callback) => {
      // allow REST tools like Postman (no origin)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// middleware 
app.use(express.json());

// routes 
app.use("/products", productRoutes);
app.use("/auth", authRoutes);


// DB Connection 
const dbURI = process.env.MONGO_URI;
connectDB(dbURI);

// start server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// TODO:
// 1. jwt token authentication
// 2. error handling middleware
// 3. GraphQL endpoint
// 4. Add example fetch request 
// 5. Unit test example
// 6. Dockerfile for containerization

