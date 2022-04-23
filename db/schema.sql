DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30),
    department VARCHAR(30),
    salary INT NOT NULL
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR(30),
    department VARCHAR(30), 
    salary INT NOT NULL,
    manager TEXT
)

