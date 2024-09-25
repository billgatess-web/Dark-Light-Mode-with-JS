const fullDarkModeCheckbox = document.querySelector('#full-dark-mode');
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode');
const container = document.querySelector('.container')

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'));
const isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'));


if(isFullDarkMode){
    fullDarkModeCheckbox.checked = true;
}
if(isContainedDarkMode){
    containedDarkModeCheckbox.checked = true;
}

    changeFullDarkMode();
    changeContainedColorMode();

fullDarkModeCheckbox.addEventListener('change', ()=> {
    changeFullDarkMode();
    changeContainedColorMode();
}); 


function changeFullDarkMode(){
    // if(fullDarkModeCheckbox.checked){
    //     document.body.classList.add("dark");
    //     localStorage.setItem('fullDarkModeCheckbox', true)
    // } else{
    //     document.body.classList.remove("dark");
    //     localStorage.setItem('fullDarkModeCheckbox', false)
    // }
    // containedDarkModeCheckbox.checked = fullDarkModeCheckbox.checked;
    changeTheme(fullDarkModeCheckbox, document.body , 'fullDarkModeCheckbox')
}


function changeContainedColorMode(){
    changeTheme(containedDarkModeCheckbox, container, 'containedDarkModeCheckbox')
}

function changeTheme(checkbox, element, localStorageKey){
    if(checkbox.checked){
        element.classList.add("dark");
        localStorage.setItem(localStorageKey, true)
        
    } else{
        element.classList.remove("dark");
        localStorage.setItem(localStorageKey, false)
    }
}

containedDarkModeCheckbox.addEventListener('change', changeContainedColorMode);

