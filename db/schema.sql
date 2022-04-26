DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department (
  -- activity 12
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    department_name VARCHAR(30),
    salary INT NOT NULL,
    -- activity 19
    FOREIGN KEY (department_name)
    REFERENCES department(department_name)
    ON DELETE SET NULL 
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    title VARCHAR(30),
    department_name VARCHAR(30), 
    salary INT NOT NULL,
    manager TEXT,

    FOREIGN KEY (employee_id)
    REFERENCES role(role_id)
    ON DELETE SET NULL, 

    FOREIGN KEY (title)
    REFERENCES role(title)
    ON DELETE SET NULL,

    FOREIGN KEY (department_name)
    REFERENCES role(department_name)
    ON DELETE SET NULL,

    FOREIGN KEY (salary)
    REFERENCES role(salary)
    ON DELETE SET NULL
);

