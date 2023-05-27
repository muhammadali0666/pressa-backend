const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const authRouter = require("./router/users.router")
const addCard = require("./router/card.router")

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();


app.use(cors());
app.use(express.json());

/////////////////////// ROUTER
app.use(authRouter)
app.use(addCard)



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} the Port`);
})