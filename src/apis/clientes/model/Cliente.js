const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema(
  {
    cliente: {
      tipo: String,
      apellido: String,
      nombre: String,
      ciudad: String,
      cuit: Number,
    },
    tipoPago: String,
    fechaEmision: Date,
    item: [
      {
        album: String,
        anio: Number,
        cantidad: Number,
        precio: Number,
        artista: String,
      },
    ],
    nroFactura: String,
    intereses: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ClienteModel = mongoose.model("clientes", clienteSchema);

module.exports = ClienteModel;
