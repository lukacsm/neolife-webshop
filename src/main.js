"use strict"
import { SERVER, PORT } from "./server";
import MainLayouts from "express-ejs-layouts";
import express from "express";

//template engine
SERVER.use(MainLayouts);
SERVER.set("layout", "layouts/html");
SERVER.set("view engine", "ejs");

//server connection
SERVER.listen(PORT, () => {
    console.log("Server has started")
});

//static files
SERVER.use(express.static("views/static"));

SERVER.get("/", (req, res) => {
    res.render("pages/index", {
        title: "NeoLife Shop - Gáspár Zsuzsanna"
    });
});

SERVER.get("/webshop", (req, res) => {
    res.render("pages/webshop", {
        title: "Webshop"
    })
});

SERVER.use(
    (req, res, next) => {
    res.status(404).json({
        status: "Page not found"
    })
});