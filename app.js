const express = require('express');
const app = express();
app.use(express.json());

app.listen(5000,()=>{
    console.log('server is running');
});
app.post('/post', async(req, res) => {
    console.log(req.body);
    const { data}=req.body
    try {
    if(data=="hsh"){
        res.send({status:ok})
    }}catch(error){

    };
});