const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "bd_isaval",
});

db.connect((err) => {
   if (err) {
      console.log("Error al conectar a la base de datos:", err);
   } else {
      console.log("Conectado a la base de datos MySQL.");
   }
});

app.post("/api/clientes", (req, res) => {
   const { nombres, documento, edad, telefono, email } = req.body;
   const query =
      "INSERT INTO clientes (nombres, documento, edad, telefono, email) VALUES (?, ?, ?, ?, ?)";

   db.query(
      query,
      [nombres, documento, edad, telefono, email],
      (err, result) => {
         if (err) {
            console.error("Error al insertar datos:", err);
            res.status(500).send("Error al insertar datos");
         } else {
            res.status(200).send("Datos insertados correctamente");
         }
      }
   );
});

app.listen(port, () => {
   console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
