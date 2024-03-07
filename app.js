import express from "express"
import { envairoments } from "./config/envairoments.js"
import { validateConexion } from "./db/connect.js";

const appExpress = express();
appExpress.use(express.json())
appExpress.use(validateConexion)

appExpress.get("/", (req,res)=>{
    res.send("funcionando")
})

const port = envairoments.port;
appExpress.listen(port, ()=>console.log(`servidor iniciado en el puerto: ${port}`))