USE employeetracker_db;

INSERT INTO department (department_name)
VALUES ('Sales'),
       ('Legal'),
       ('Finance'),
       ('Engrineering');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 4),
       ('Software Engineer', 120000, 4),
       ('Account Manager', 160000, 3),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 2),
       ('Lawyer', 190000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lina', 'Choi', 4, NULL), -- always be null 
       ('Jung', 'Yoon', 3, NULL),
       ('EJ', 'Jong', 8, NULL),
       ('John', 'Doe', 1, NULL),
       ('Jane', 'Doe', 2, 1),
       ('Michael', 'Scott', 5, NULL),
       ('Dwight', 'Schrute', 6, 2),
       ('Miller', 'Jong', 7, 1);