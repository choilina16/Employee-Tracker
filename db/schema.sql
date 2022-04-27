-- was running into a problem where I couldn't source into this file
-- !!MAKE SURE YOU DO -> SOURCE db/schema.sql 
-- was running into some error when running the schema + seed, Manan from BCS helped me run through and figure out that my 'ON DELETE CASCADE' was creating some errors. Told me that it probably wasn't needed on this assignment, so we ended up commenting those out 

DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department (
  -- activity 12
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, 
    -- activity 19
    FOREIGN KEY (department_id) -- this is from the table role
    REFERENCES department(id) -- this if from department table id
    -- ON DELETE CASCADE -- tells the parent the child is now modified, not needed in this assignment 
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT, -- cannot be not null because of 1st employee
    
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    -- ON DELETE CASCADE, 

    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    -- ON DELETE CASCADE
);

