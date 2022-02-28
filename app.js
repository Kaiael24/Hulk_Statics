const express = require("express")
const path = require("path")
const app = express()
const PORT = 3000
const publicPath = path.resolve(__dirname,"./public")

app.use(express.static(publicPath))

app.listen(PORT,()=>console.log(`El servidor esta corriendo en el puerto numero ${PORT}`))

app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

