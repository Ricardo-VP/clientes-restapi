const ClienteModel = require("./model/Cliente");

const obtenerTodos = async (req, res) => {
  await ClienteModel.find()
    .then((clientes) => {
      if (clientes.length === 0) {
        return res.send({
          message: "No hay clientes registrados",
        });
      }
      return res.send(clientes);
    })
    .catch((error) => {
      console.log(error);
      return res.send({ message: "No se pudo obtener los clientes" });
    });
};

const obtenerUno = async (req, res) => {
  const { clienteId } = req.params;
  await ClienteModel.findById(clienteId)
    .then((cliente) => {
      return res.send(cliente);
    })
    .catch((error) => {
      console.log(error);
      return res.send({ message: "Cliente no encontrado" });
    });
};

const crear = async (req, res) => {
  const cliente = req.body;
  await ClienteModel.create(cliente)
    .then(() => {
      return res.send({
        message: "Cliente registrado",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.send({ message: "No se pudo registrar el cliente" });
    });
};

const actualizar = async (req, res) => {
  const { clienteId } = req.params;
  const cliente = req.body;
  await ClienteModel.findByIdAndUpdate(clienteId, cliente, { new: true })
    .then((clienteActualizado) => {
      return res.send(clienteActualizado);
    })
    .catch((error) => {
      console.log(error);
      return res.send({ message: "Cliente no encontrado" });
    });
};

const eliminar = async (req, res) => {
  const { clienteId } = req.params;
  await ClienteModel.findByIdAndDelete(clienteId)
    .then((cliente) => {
      if (cliente === null) {
        return res.send({
          message: "Cliente no encontrado",
        });
      }
      return res.send({ message: "Cliente eliminado correctamente" });
    })
    .catch((error) => {
      console.log(error);
      return res.send({ message: "No se pudo eliminar el cliente" });
    });
};

module.exports = {
  obtenerTodos,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
};
