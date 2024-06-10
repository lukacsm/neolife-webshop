"use strict"
import { SERVER, PORT } from "./server";

SERVER.listen(PORT, () => {
    console.log("Server has started")
});