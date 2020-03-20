// Dom elements
let sidebarSex = document.querySelector("#sidebarSex");
let sidebarName = document.querySelector("#sidebarName");
let sidebarNameNat = document.querySelector("#sidebarNameNat");
let sidebarID = document.querySelector("#sidebarID");
let departament = document.querySelector("#departament");
let room = document.querySelector("#room");
let phoneInt = document.querySelector("#phoneInt");
let phoneMob = document.querySelector("#phoneMob");
let email = document.querySelector("#email");
let skype = document.querySelector("#skype");
let cNum = document.querySelector("#cNum");
let hireDate = document.querySelector("#hireDate");
let status = document.querySelector("#status");

let DATA;
fetch("dataPerson.json")
    .then(response => response.json())
    .then(json => DATA = Object.assign({}, json)).then(() => render());

function render() {
    info = DATA.member;
    sidebarSex.textContent = info.sex;
    sidebarName.textContent = info.name + ' ' +info.surname;
    sidebarNameNat.textContent = info.nameNat + ' ' +info.surnameNat;
    sidebarID.textContent = info.id;
    departament.textContent = info.departament;
    room.textContent = info.room;
    phoneInt.textContent = info.phoneInternal;
    phoneMob.textContent = info.phonMob;
    email.textContent = info.email;
    skype.textContent = info.skype;
    cNum.textContent = info.cNum;
    hireDate.textContent = info.hireDate;
    status.textContent = info.status;
}