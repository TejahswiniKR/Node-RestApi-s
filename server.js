const express=require('express')
const app = express()

// route to access from web browser

app.get('/',async (req,res)=>{
 res.send('Welcome to Nodejs Application')
})

app.listen(3000, ()=> {
    console.log('Nodejs application on port 3000')
})


