CREATE DATABASE IF NOT EXISTS bd_isaval;

USE bd_isaval;

CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(255) NOT NULL,
  documento VARCHAR(255) NOT NULL,
  edad INT NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

select * from clientes;