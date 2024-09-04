const route = require("express").Router();
const getPageTitle = require("../middleware/common/htmlpram");
const getInboxPage = require("../controlar/getInbox");

route.get("/", getPageTitle("inbox"), getInboxPage);

module.exports = route;