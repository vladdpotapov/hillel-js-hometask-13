'use strict';

// CONSTRUCTORS:
function Human(userId, userName, userAge, userJob, userNumber, userBalance) {
    this.id = userId;
    this.name = userName;
    this.age = userAge;
    this.job = userJob;
    this.number = userNumber;
    this.balance = userBalance;
}

function Company(companyId, companyName, companyEmloyees, companyArea,  companyNumber, companyBalance) {
    this.id = companyId;
    this.name = companyName;
    this.employees = companyEmloyees;
    this.area = companyArea;
    this.number = companyNumber;
    this.balance = companyBalance;
}

function Car(carId, carBrand, carModel, carAge, carPower, carPrice) {
    this.id = carId;
    this.brand = carBrand;
    this.model = carModel;
    this.age = carAge;
    this.power = carPower;
    this.price = carPrice;
}

// MAIN FUNCTIONS:
function createTable(array) {               // showCars - 'user'
    for (let i = 0; i < array.length; i++) {
        let row = createTableElement('tr', 'table__row');
        let cellId = createTableElement('td', 'table__cell');
        let cellName = createTableElement('td', 'table__cell');
        let cellActions = createTableElement('td', 'table__cell');
        let buttonView = createButton('View');
        let buttonEdit = createButton('Edit');
        let buttonDelete = createButton('Delete');
        let buttonBuy = createButton('Buy');

        setText(cellId, array[i].id);
        setText(cellName, array[i].name);

        appendElement(mainTable, row);
        appendElement(row, cellId);
        appendElement(row, cellName);
        appendElement(row, cellActions);
        appendElement(cellActions, buttonView);
        appendElement(cellActions, buttonEdit);
        appendElement(cellActions, buttonDelete);
        appendElement(cellActions, buttonBuy);

        buttonView.addEventListener('click', () => showInfo(i, array));
        buttonEdit.addEventListener('click', () => editInfo(i, array));
        buttonDelete.addEventListener('click', () => confirm(i, array));
        buttonBuy.addEventListener('click', () => showCars(i, cars, 'user'));
        buttonAddUser.addEventListener('click', () => addNewObject(i, array));
        buttonAddCompany.addEventListener('click', () => addNewObject(i, array));
    }
}

function showInfo(i, array) {
    clearContainer(infoWindow);

    let table = createTableElement('table', 'table');
    let buttonClose = createButton('Close');
    buttonClose.classList.add('service-button');
    buttonClose.addEventListener('click', () => closeWindow(table));

    appendElement(infoWindow, table);
    appendElement(table, buttonClose);

    for (let key in array[i]) {
        let row = createTableElement('tr', 'table__row');
        let cell = createTableElement('td', 'table__cell');

        setText(cell, `${key}: ${array[i][key]}`);

        appendElement(table, row);
        appendElement(row, cell);
    }
}

function editInfo(i, array) {               // saveToLocalStorage - Don't work
    clearContainer(infoWindow);

    let table = createTableElement('table', 'table');
    let buttonClose = createButton('Close');
    buttonClose.classList.add('service-button');
    let buttonSave = createButton('Save');
    buttonSave.classList.add('service-button');
    let classIdentifier = 1;

    appendElement(infoWindow, table);
    appendElement(table, buttonClose);
    appendElement(table, buttonSave);

    for (let key in array[i]) {
        let row = createTableElement('tr', 'table__row');
        let cell = createTableElement('td', 'table__cell');
        let input = createInput(array[i][key], classIdentifier);
        classIdentifier++;

        setText(cell, `${key}: `);

        appendElement(table, row);
        appendElement(row, cell);
        appendElement(row, input);
    }

    buttonClose.addEventListener('click', () => closeWindow(table));
    buttonSave.addEventListener('click', () => {
        rewriteInputValues(i, array);
        let valid = validateInputs();
        if (valid) {
            console.log('Valid');
            saveToLocalStorage(users, 'Users');             // Don't work
            saveToLocalStorage(companies, 'Companies');     // Don't work
            updateTable(array);
        }
    });
}

function addNewObject(i, array) {           // Needs optimization
    clearContainer(infoWindow);

    let table = createTableElement('table', 'table');
    let buttonClose = createButton('Close');
    buttonClose.classList.add('service-button');
    let buttonSave = createButton('Save');
    buttonSave.classList.add('service-button');
    let classIdentifier = 1;

    appendElement(infoWindow, table);
    appendElement(table, buttonClose);
    appendElement(table, buttonSave);

    if (array === users) {
        let newObject = {id: null, name: null, age: null, job: null, number: null, balance: null};
        for (let key in newObject) {
            let row = createTableElement('tr', 'table__row');
            let cell = createTableElement('td', 'table__cell');
            let input = createInput('', classIdentifier);
            classIdentifier++;

            setText(cell, `${key}: `);

            appendElement(table, row);
            appendElement(row, cell);
            appendElement(row, input);
        }

        buttonSave.addEventListener('click', () => {
            // rewriteInputValues(i, array);
            let inputs = document.querySelectorAll('.inputs');
            let inputsValue = Object.values(array[i]);

            for (let i = 0; i < inputs.length; i++) {
                if (inputsValue[i] !== inputs[i].value) {
                inputsValue[i] = inputs[i].value;
                }
            }

            const objectKeys = {id: null, name: null, age: null, job: null, number: null, balance: null};
            Object.keys(objectKeys).forEach(function(key, index){
                objectKeys[key] = inputsValue[index];
            });

            let valid = validateInputs();
            if (valid) {
                array.push(objectKeys);
                saveToLocalStorage(users, 'Users');             // Don't work
                saveToLocalStorage(companies, 'Companies');     // Don't work
                updateTable(array);
            }
        });
    }

    if (array === companies) {
        let newObject = {id: null, name: null, employees: null, area: null, number: null, balance: null};
        for (let key in newObject) {
            let row = createTableElement('tr', 'table__row');
            let cell = createTableElement('td', 'table__cell');
            let input = createInput('', classIdentifier);
            classIdentifier++;

            setText(cell, `${key}: `);

            appendElement(table, row);
            appendElement(row, cell);
            appendElement(row, input);
        }

        buttonSave.addEventListener('click', () => {
            // rewriteInputValues(i, array);
            let inputs = document.querySelectorAll('.inputs');
            let inputsValue = Object.values(array[i]);

            for (let i = 0; i < inputs.length; i++) {
                if (inputsValue[i] !== inputs[i].value) {
                inputsValue[i] = inputs[i].value;
                }
            }

            const objectKeys = {id: null, name: null, age: null, job: null, number: null, balance: null};
            Object.keys(objectKeys).forEach(function(key, index){
                objectKeys[key] = inputsValue[index];
            });

            let valid = validateInputs();
            if (valid) {
                array.push(objectKeys);
                saveToLocalStorage(users, 'Users');             // Don't work
                saveToLocalStorage(companies, 'Companies');     // Don't work
                updateTable(array);
            }
        });
    }

    buttonClose.addEventListener('click', () => closeWindow(table));

}

function showCars(buyerIndex, array, buyerType) {
    clearContainer(table);

    for (let i = 0; i < array.length; i++) {
        let row = createTableElement('tr', 'table__row');
        let cellId = createTableElement('td', 'table__cell');
        let cellName = createTableElement('td', 'table__cell');
        let cellActions = createTableElement('td', 'table__cell');
        let buttonView = createButton('View');
        let buttonBuy = createButton('Buy');

        setText(cellId, array[i].id);
        setText(cellName, array[i].brand);

        appendElement(mainTable, row);
        appendElement(row, cellId);
        appendElement(row, cellName);
        appendElement(row, cellActions);
        appendElement(cellActions, buttonView);
        appendElement(cellActions, buttonBuy);

        buttonView.addEventListener('click', () => showInfo(i, array));
        buttonBuy.addEventListener('click', () => confirmPurchase(i, array, buyerIndex, buyerType));
    }
}

// ELEMENTS CREATION AND PLACEMENT:
function createTableElement(elementTag, elementClass) {
    let element = document.createElement(elementTag);
    element.classList.add(elementClass);
    return element;
}

function createButton(value) {
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', value);
    button.classList.add('button');
    return button;
}

function createInput(value, identifier) {
    let element = document.createElement('input');
    element.classList.add('input' + identifier);
    element.classList.add('inputs');
    element.setAttribute('value', value);
    return element;
}

function appendElement(parentElement, childElement) {
    parentElement.append(childElement);
}

// SERVICE FUNCTIONS:
function updateTable(array) {
    clearContainer(mainTable);
    clearContainer(infoWindow);
    createTable(array);
}

function validateInputs() {
    let inputId     = document.querySelector('.input1');
    let inputName   = document.querySelector('.input2');
    let inputAge    = document.querySelector('.input3');
    let inputJob    = document.querySelector('.input4');
    let inputNumber = document.querySelector('.input5');
    let inputBalance   = document.querySelector('.input6');

    let valid = true;

    let patternName = /^[A-Z]{1}[a-z]{1,20}$/;
    let resultName = patternName.test(inputName.value);
    let patternJob = /^[A-Z]{1}[a-z]{1,30}$/;
    let resultJob = patternJob.test(inputJob.value);
    let patternAge = /^[0-9]{1,}$/;
    let resultAge = patternAge.test(inputAge.value);
    let patternPhoneNumber = /^[0][0-9]{2}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/;
    let resultPhoneNumber = patternPhoneNumber.test(inputNumber.value);
    let patternBalance = /^\d{1,}$/;
    let resultBalance = patternBalance.test(inputBalance.value);

    if (!inputId.value) {
        inputId.classList.add('incorrect');
        valid = false;
    } else {
        inputId.classList.remove('incorrect');
    }

    if (!resultName) {
        inputName.classList.add('incorrect');
        valid = false;
    } else {
        inputName.classList.remove('incorrect');
    }

    if (!resultJob) {
        inputJob.classList.add('incorrect');
        valid = false;
    } else {
        inputJob.classList.remove('incorrect');
    }

    if (!resultAge) {
        inputAge.classList.add('incorrect');
        valid = false;
    } else {
        inputAge.classList.remove('incorrect');
    }

    if (!resultPhoneNumber) {
        inputNumber.classList.add('incorrect');
        valid = false;
    } else {
        inputNumber.classList.remove('incorrect');
    }

    if (!resultBalance) {
        inputBalance.classList.add('incorrect');
        valid = false;
    } else {
        inputBalance.classList.remove('incorrect');
    }

    return valid;
}

function clearContainer(containerName) {
    containerName.innerHTML = '';
}

function closeWindow(elementName) {
    elementName.remove();
}

function setText(element, value) {
    element.innerHTML = value;
}

function confirm(i, array) {
    clearContainer(infoWindow);
    let box = createTableElement('div', 'confirm-box');
    let cell = createTableElement('div', 'confirm-box__cell');
    let buttonYes = createButton('Delete');
    buttonYes.classList.add('service-button');
    let buttonNo = createButton('Cancel');
    buttonNo.classList.add('service-button');
    setText(cell, 'Are You Sure?');

    appendElement(infoWindow, box);
    appendElement(box, cell);
    appendElement(box, buttonYes);
    appendElement(box, buttonNo);

    buttonYes.addEventListener('click', () => removeObject(i, array));
    buttonNo.addEventListener('click', () => closeWindow(box));
}

function confirmPurchase(i, array, buyerIndex, buyerType) {

    clearContainer(infoWindow);
    let box = createTableElement('div', 'confirm-box');
    let cell = createTableElement('div', 'confirm-box__cell');
    let buttonYes = createButton('Purchase');
    buttonYes.classList.add('service-button');
    let buttonNo = createButton('Cancel');
    buttonNo.classList.add('service-button');
    setText(cell, 'Are You Sure?');

    appendElement(infoWindow, box);
    appendElement(box, cell);
    appendElement(box, buttonYes);
    appendElement(box, buttonNo);

    buttonYes.addEventListener('click', () => {
        checkBalance(i, array, buyerIndex, buyerType);
    });
    buttonNo.addEventListener('click', () => closeWindow(box));
}

function checkBalance(i, array, buyerIndex, buyerType) {
    if (buyerType === 'user') {
        if (users[buyerIndex].balance >= array[i].price) {
            // users[buyerIndex].car = `${array[i].brand} ` + `${array[i].model}`;
            // console.log(users[buyerIndex]);
            console.log('purchased');
        } else {
            console.log('Not enough money');
        }
    } else if (buyerType === 'company') {   
        if (companies[buyerIndex].balance >= array[i].price) {
            // companies[buyerIndex].car = `${array[i].brand} ` + `${array[i].model}`;
            // console.log(companies[buyerIndex]);
            console.log('purchased');

        } else {
            console.log('Not enough money');
        }
    }
    closeWindow(infoWindow);
}

function removeObject(i, array) {           // saveToLocalStorage - Don't work
    clearContainer(infoWindow);

    array.splice(i, 1);

    saveToLocalStorage(array, 'Data');      // Don't work
    updateTable(array);
}

function rewriteInputValues(i, array) {
    let inputs = document.querySelectorAll('.inputs');
    let inputsValue = Object.values(array[i]);
    for (let i = 0; i < inputs.length; i++) {
        if (inputsValue[i] !== inputs[i].value) {
            inputsValue[i] = inputs[i].value;
        }
    }

    if (array === users) {
        const objectKeys = {id: null, name: null, age: null, job: null, number: null, balance: null};
        Object.keys(objectKeys).forEach(function(key, index){
            objectKeys[key] = inputsValue[index];
        });

        array.splice([i], 1, objectKeys);
    }

    if (array === companies) {
        const objectKeys = {id: null, name: null, employees: null, area: null, number: null, balance: null};
        Object.keys(objectKeys).forEach(function(key, index){
            objectKeys[key] = inputsValue[index];
        });

        array.splice([i], 1, objectKeys);
    }
}

function spliceObject(array, object) {
    array.splice([i], 1, object);
}

function pushObject(array, object) {
    array.push(object);
}
// LOCAL STORAGE FUNCTIONS:
function saveToLocalStorage(array, keyName) {          // Don't work
    let stringifiedArray = array.map(function(item) {
        return JSON.stringify(item);
    });
    let stringArray = stringifiedArray.join(';');
    localStorage.setItem(keyName, stringArray);
}

function getFromLocalStorage(array, keyName) {         // Don't work
    if (!localStorage.getItem(keyName)) {
        if (array === users) {
            array = defaultUsers;
        }

        if (array === companies) {
            array = defaultCompanies;
        }
        return;
    }

    let parsedArray = localStorage.getItem(keyName).split(';');
    let dataArray = parsedArray.map(item => JSON.parse(item));
    if (!dataArray) {
        if (array === users) {
            array = defaultUsers;
        }

        if (array === companies) {
            array = defaultCompanies;
        }
        return;
    }

    if (array === users) {
        array = dataArray;
    }

    if (array === companies) {
        array = dataArray;
    }
    return array;
}
