
require("dotenv").config();
 const app = require("./app")


// const app = express()
const PORT = process.env.PORT || 8080


// server code 
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})