import express from "express";

import employesRouter from "./routes/employes.routes.js";
import indexRouter from "./routes/index.routes.js";




const app = express();


  app.use(express.json());

  app.use("/api", indexRouter);
  app.use("/api", employesRouter); 
  
  app.use((req, res, next) => {
    res.status(404).send("Not found");
  });

  export default app;