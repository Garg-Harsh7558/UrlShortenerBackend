import "dotenv/config";
import app from "./src/app.js";
import ConnectDB from "./src/db/db.js";

await ConnectDB();
app.listen(process.env.PORT,()=>{
  console.log("Server is running on port",process.env.PORT);
})