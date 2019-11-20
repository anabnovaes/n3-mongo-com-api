const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", bodyParser.json(), controller.add)
router.get("/nomes/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.delete("/deletar/:id", controller.deleteId)
module.exports = router
