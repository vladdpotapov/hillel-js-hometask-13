'use strict';

getFromLocalStorage(users, 'Users');            // Don't work
getFromLocalStorage(companies, 'Companies');    // Don't work

buttonShowUsersList.addEventListener('click', () => {
    clearContainer(table);
    clearContainer(infoWindow);
    buttonsAddBox.classList.toggle('hidden');
    createTable(users);
});

buttonShowCompaniesList.addEventListener('click', () => {
    clearContainer(table);
    clearContainer(infoWindow);
    buttonsAddBox.classList.toggle('hidden');
    createTable(companies);
});
