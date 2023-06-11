const express = require('express');

const app = express();

const  PORT =3000;

app.get('/',(req,res)=>{
  
    res.send('message')

})




app.listen(PORT,()=>{
console.log('connect  to port 3000');
})