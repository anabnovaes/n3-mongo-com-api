const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", controller.add)
router.get("/nomes/:nome", controller.getByName)
router.get("/id/:id", controller.getById)
router.delete("/deletar/:id", controller.deleteById)
router.patch("/atualizar/:id" ,controller.updateById)
module.exports = router
