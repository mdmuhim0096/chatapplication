const route = require("express").Router();
const getPageTitle = require("../middleware/common/htmlpram");
const getInboxPage = require("../controlar/getLogin");

route.get("/", getPageTitle("login"), getInboxPage);

module.exports = route;