const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');

// https://www.sitepoint.com/using-node-mysql-javascript-client/
// connecting to the database
// activity 21
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employeetracker_db'
    },
    console.log(`Connected to the employeetracker_db database.`)
  );

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Whatchu wanna do?',
                choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department'
                ]
            },
        ])
        .then(res => {
            let choice = res.choice;
            switch (choice) {
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
            }
        });
}

// function to view employees on the command line 
function viewEmployees () {
    db.query
};

// function to add employees on the command line 
function addEmployee () {

};

// function to update employees' role on the command line 
function updateEmployeeRole () {

};

// function to view all roles on the command line 
function viewAllRoles () {

};

// function to add roles on the command line 
function addRole () {

};

// function to view all departments on the command line 
function viewAllDepartments () {

};




init();