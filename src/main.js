"use strict"
import { SERVER, PORT } from "./server";

SERVER.listen(PORT, () => {
    console.log("Server has started")
});

SERVER.use(
    (req, res, next) => {
    res.status(404).json({
        status: "Page not found"
    })
})

SERVER.get("/", (req, res) => {
    res.send("Hello World");
});