let DobOpen = false;
let dateOfBirth;
const settingiconsEL = document.getElementById('icon');
const settingcontentEL = document.getElementById('settingcontent');

const initialTextEL = document.getElementById('initialText');
const afterTextEL = document.getElementById('afterDobButtom');
const buttonEL = document.getElementById('button');
const dobEL = document.getElementById('dob');
const yearEL = document.getElementById('year');
const monthEL = document.getElementById('month');
const dayEL = document.getElementById('day');
const hourEL = document.getElementById('hour');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');


const toggleDateOfBirthSelector = () => {

    if(DobOpen){
        settingcontentEL.classList.add('hide');
    }else{
        settingcontentEL.classList.remove('hide');
    }

    DobOpen =!DobOpen;
    console.log('Toggle', DobOpen);

};
const upDateAge = () => {

    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff/(1000*60*60*24*365));
    const month = Math.floor(dateDiff/(1000*60*60*24*365) % 12);
    const day = Math.floor(dateDiff/(1000*60*60*24) % 30);
    const hour = Math.floor(dateDiff/(1000*60*60) %24);
    const minutes = Math.floor(dateDiff/(1000*60) % 60);
    const seconds = Math.floor(dateDiff/(1000) % 60);
    
    yearEL.innerHTML = year;
    monthEL.innerHTML = month;

    dayEL.innerHTML = day;

    hourEL.innerHTML = hour;

    minutesEL.innerHTML = minutes;

    secondsEL.innerHTML = seconds;


};


const setDobHandler = () => {
   const dateString = dobEL.value;

   dateOfBirth =new Date(dateString);

    if(dateOfBirth){
        initialTextEL.classList.add("hide");
        afterTextEL.classList.remove('hide');
       setInterval(() => upDateAge(),1000)
    }else{
        afterTextEL.classList.add('hide');
        initialTextEL.classList.remove("hide");
    }
};

setDobHandler();



settingiconsEL.addEventListener('click', toggleDateOfBirthSelector);
buttonEL.addEventListener('click', setDobHandler);