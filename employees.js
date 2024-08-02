const inquirer = require('inquirer');
const { Pool } = require('pg');
const pool = require('./employees');

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: "Enter the employee's name:",
    },
  ]).then((answers) => {
    const { employeeName } = answers;

    pool.query('INSERT INTO employees (name) VALUES ($1)', [employeeName], (error, results) => {
      if (error) {
        console.error('Error adding employee:', error);
      } else {
        console.log('Employee added successfully!');
      }
    });
  });
}

addEmployee();

