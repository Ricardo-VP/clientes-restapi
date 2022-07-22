const { Router } = require("express");
const clientes = require("./clientes/routes");

const router = Router();

router.use("/clientes", clientes);

module.exports = router;
