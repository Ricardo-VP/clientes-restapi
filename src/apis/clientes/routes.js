const { Router } = require("express");
const {
  obtenerTodos,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
} = require("./controller");

const clientes = Router();

clientes.get("/", obtenerTodos);
clientes.get("/:clienteId", obtenerUno);
clientes.post("/", crear);
clientes.put("/:clienteId", actualizar);
clientes.delete("/:clienteId", eliminar);

module.exports = clientes;
