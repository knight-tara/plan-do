require("dotenv").config();

const app = require("./app.js");

const listenForRequests = () => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log("Now listening on port", port);
    });
};