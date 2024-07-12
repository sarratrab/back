const express =require("express");
require ('./Config/connect');
const cors = require("cors");
const path = require('path');
const app = express();
const userRouter =require ('./Routes/user');
const formcontactRouter = require ('./Routes/contactform')
const router = express.Router();
const promotionRoutes = require('./routes/promotion');
const bodyParser = require('body-parser');


// Utilisez les routes de promotion



app.use(cors({
  origin: 'http://localhost:4200' ,
  optionsSuccessStatus: 200 ,
  credentials: true 
}));



app.use(express.json());
app.use(bodyParser.json());





app.use('/api/promotions', promotionRoutes);
app.use('/user', userRouter);
app.use('/formcontact', formcontactRouter);



app.listen(4000,()=>{
  console.log('server work');
})
