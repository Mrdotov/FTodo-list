const express = require('express');

const app = express();

const  PORT =process.env.PORT || 3001;

app.get('/api',(req,res)=>{
  
    res.json({
        massage: "Hello todosss"
    })

})

app.listen(PORT,()=>{
console.log(`connect  to port ${PORT}`);
})