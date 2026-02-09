import express from "express";
import cors from "cors";
import commonRouter from "./Commonrouter/v1router.js"
import config from "./config.js"


const app = express();
app.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PATCH", "PUT"]
}))
app.use(express.json())

app.use("/api", commonRouter);


app.listen(config.PORT, () => {
    console.log("server is running successfully", config.PORT);

})



