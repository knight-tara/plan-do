// APPLICATION LOGIC

// Import Express library
import express from 'express'; 

// Import CORS middleware
import cors from 'cors';

// Import routers
import inspirationRouter from './routes/inspiration.js';

// Initialise Express application
const app = express();

// Apply global middleware:
// --> allow requests from any client
app.use(cors()); 

// --> parse JSON request bodies so that req.body is available in route handlers
app.use(express.json());

// Mount routers on paths
app.use("/inspiration", inspirationRouter);

// Define error handlers:
// --> 404 error
app.use((_req, res) => {
    res.status(404).json({ err: "Error 404: Not Found" });
});

// --> request processing error
app.use((err, _req, res, _next) => {
    console.error(err);
    if (process.env.NODE_ENV === "development") {
        res.status(500).send(err.message);
    } else {
        res.status(500).json({ err: "Something went wrong" });
    }
});

// Export app object
export default app;