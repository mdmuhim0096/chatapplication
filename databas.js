const mongoose= require("mongoose");
const databasLink = "mongodb://localhost:27017/profile";

mongoose.connect(databasLink);
const databasConnection = mongoose.connection;
databasConnection.on("connected", ()=>{
    console.log("this databas successfully connected with express server");
});

module.exports = databasConnection;