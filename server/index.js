import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import dallRoutes from "./routes/dalle.routes.js"

const PORT = 8080

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/dalle", dallRoutes)

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`))
