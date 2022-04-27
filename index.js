// I have a bunch of personal notes in this hw...pretty much I'm studying while I do this...hence all the comments :) 

// this is needed for the prompts in the command line 
const inquirer = require('inquirer');
// importing in the mysql2 library
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
    console.log(`Connected to the employeetracker_db database!`)
);

// initial prompt that the user will run into when running node index.js
const init = () =>  {
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
                ],
            },
        ])
        .then(res => {
            // Using the switch case to make the code more efficient & clean instead of using a bunch of if statements 
            // https://www.youtube.com/watch?v=xDY1TTM9sGs&ab_channel=TechWithTim --> used this youtube video to help me understand the logic
            let choice = res.choice; // passing in the response that the user selects into the switch case 
            switch (choice) {
                case 'View All Employees': // if case if equal to 'view all employees'
                    viewEmployees(); // then this function will execute 
                    break; // moving onto next case
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
                case 'Add Department':
                    addDepartment();
                    break;
                case 'QUIT':
                    process.exit(); // this is ued to exit from a node.js program 
            }
        });
}

// function to view employees on the command line 
// using activity 21 as a reference for to create this function
function viewEmployees () {
    db.query('SELECT * FROM employee', function (err, results) {
        // console.log(results); //this will show up like usual
        console.table(results); // using console.table puts all data inside of a table -> https://developer.mozilla.org/en-US/docs/Web/API/console/table
        init(); // need this to bring up the main choices again
    }); 
};

// function to add employees on the command line 
// using my previous hw (Professional-README-Generator) as a reference to make these prompts https://github.com/choilina16/Professional-README-Generator/blob/main/index.js ^^
function addEmployee () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'First name of new employee',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Last name of new employee',
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Type in corresponding role id',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Type in the manager id if applicable',
            },
        ]).then((res) => {
            console.log(res);
            // pretty much the same as activity 21 for the DELETE but with the INSERT 
            db.query('INSERT INTO employee SET ?', {
                first_name: res.firstName, 
                last_name: res.lastName, 
                role_id: res.roleId, 
                manager_id: res.managerId
            }, function (err, res) {
                console.table(res);
                viewEmployees();
                init();
            });
        });
};

// function to update employees' role on the command line 
function updateEmployeeRole () {
    inquirer 
        .prompt([

        ])

};

// function to view all roles on the command line 
// activity 21
function viewAllRoles () {
    db.query('SELECT * FROM role', function (err, res) {
        // console.log(res);
        console.table(res);
        init();
    }); 
};

// function to add roles on the command line 
function addRole () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'New role title?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'New role salary?',
            },
            {
                type: 'input',
                name: 'departmentId',
                message: 'Type in corresponding department id',
            },
        ]).then((res) => {
            db.query('INSERT INTO role SET ?', {
                title: res.title, 
                salary: res.salary, 
                department_id: res.departmentId, 
            }, function (err, res) {
                console.table(res);
                viewAllRoles();
                init();
            });
        })

};

// function to view all departments on the command line 
// activity 21
function viewAllDepartments () {
    db.query('SELECT * FROM department', function (err, res) {
        // console.log(res);
        console.table(res);
        init();
    }); 
};

// function to add departments on the command line 
function addDepartment () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'Department name?',
            }
        ])
        .then((res) => {
            db.query('INSERT INTO department SET ?', {
                department_name: res.department,
            }, function (err, res) {
                console.table(res);
                viewAllDepartments();
                init();
            });
        });
};

init();