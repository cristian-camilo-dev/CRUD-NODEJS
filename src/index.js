import app from "./app.js";
import { PORT } from "./config.js";


const port = PORT;



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
