import express from "express"
import connectDB from "./config/db.js"
import speciesRouter from "./routes/speciesRouter.js"
import explorerRouter from "./routes/explorerRouter.js"
import expeditionRouter from "./routes/expeditionRouter.js"

connectDB()

const app = express()
app.use(express.json())

app.use('/explorer', explorerRouter)
app.use('/expedition', expeditionRouter)
app.use('/species', speciesRouter)

app.listen(3000, () => console.log("Server rodando na porta 3000"))