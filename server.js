const express = require("express");
const connectDB = require('./config/db')

const app = express();
 
//Database connecttion 
connectDB();

//init middleware
app.use(express.json({extended: false}))

//Middlewaers 
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


app.get("/", (req, res) => {
  res.send("hello");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Bisrat Server Started on port ${PORT}`);
});
