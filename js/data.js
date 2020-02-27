'use strict';

const users = [
    new Human(1, 'John', 30, 'developer', '000-000-00-00', 10000),
    new Human(2, 'Kate', 25, 'dancer', '000-111-11-11', 8000),
    new Human(3, 'Jill', 23, 'painter', '000-111-11-11', 7500),
];

const companies = [
    new Company(1, 'Alpha', 150, 'development', '063-555-66-44', 160000),
    new Company(2, 'GreenTrees', 100, 'plants', '063-555-66-44', 70000),
    new Company(3, 'Foxxx', 80, 'PC Parts', '063-555-66-44', 35000),
];

const cars = [
    new Car(1, 'Mercedes', 'G500 AMG', 2, 550, 150000),
    new Car(2, 'BMW', 'X5', 7, 240, 50000),
    new Car(3, 'Audi', 'A4', 10, 150, 8500),
    new Car(4, 'Toyota', 'Camry', 7, 100, 7400),
    new Car(5, 'Nissan', 'Skyline', 15, 150, 8000),
];

let defaultUsers = users;
let defaultCompanies = companies;

const buttonShowUsersList = document.getElementById('button-show-users');
const buttonShowCompaniesList = document.getElementById('button-show-companies');

const buttonAddUser = document.getElementById('button-add-users');
const buttonAddCompany = document.getElementById('button-add-companies');

const tableWrap = document.getElementById('table-wrap');
const mainTable = document.getElementById('table');
const infoWindow = document.getElementById('info-window');
const buttonsAddBox = document.getElementById('buttons-add');