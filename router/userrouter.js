const route = require("express").Router();
const getPageTitle = require("../middleware/common/htmlpram");
const getInboxPage = require("../controlar/getUsers");

route.get("/", getPageTitle("user"), getInboxPage);

module.exports = route;