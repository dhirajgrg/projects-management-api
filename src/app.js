import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/healthy", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "healthy server",
  });
});

export default app;
