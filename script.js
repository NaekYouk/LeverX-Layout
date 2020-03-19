DATA = {
    member: [{
            name: "Egor",
            surname: "Petrov",
            nameNat: "Егор",
            surnameNat: "Петров",
            departament: "Web & Mobile",
            room: 311
        },
        {
            name: "Alexey",
            surname: "Vcherashniy",
            nameNat: "Алексей",
            surnameNat: "Вчерашний",
            departament: "Web & Mobile",
            room: 309
        }, {
            name: "Vitaliy",
            surname: "Vlasov",
            nameNat: "Виталий",
            surnameNat: "Власов",
            departament: "Web & Mobile",
            room: 310
        }, {
            name: "Elena",
            surname: "Myha",
            nameNat: "Елена",
            surnameNat: "Муха",
            departament: "Web & Mobile",
            room: 311
        }, {
            name: "Alice",
            surname: "Belova",
            nameNat: "Алиса",
            surnameNat: "Белова",
            departament: "Web & Mobile",
            room: 311
        }, {
            name: "Maxim",
            surname: "Pugach",
            nameNat: "Максим",
            surnameNat: "Пугач",
            departament: "Web & Mobile",
            room: 301
        },
    ]
};

//Связываем переменные и элементы DOM 
let informationInner = document.getElementById("information__inner");
let btnFind = document.getElementById("btn-find");
let inputFind = document.getElementById("input-find");
let informNum = document.getElementById("infNum");
let viewGrid = document.getElementById("viewGrid");
let viewTable = document.getElementById("viewTable");
let visibleHeaderLine = document.getElementById("info__header"); //Видимость заголовка строчного списка
let viewFlag = 0; //Определяет вид списка

//Загружаем информацию на сайт
function render(condition = '') {
    let fragment; //выводимая информация
    informationInner.innerHTML = ""; //Очещаем область с информацией
    let Num = 0; //Количество пользователей на экране
    let content = '';
    ar = DATA.member; //Получаем массив данных
    // debugger
    ar.forEach(element => { //перебираем массив пользовталей
        if (element.name.indexOf(condition) != -1 ||
            element.nameNat.indexOf(condition) != -1 ||
            element.surname.indexOf(condition) != -1 ||
            element.surnameNat.indexOf(condition) != -1 ||
            condition == '') { //проверка условий поиска
            if (viewFlag === 0)
                fragment = document.querySelector('#templateInfo').content;
            else
                fragment = document.querySelector('#templateInfoLine').content;

            fragment.querySelector(".itemName").textContent = element.name + ' ' + element.surname;
            fragment.querySelector(".itemNameNative").textContent = element.nameNat + ' ' + element.surnameNat;
            fragment.querySelector(".itemD").textContent = element.departament;
            fragment.querySelector(".itemR").textContent = element.room;
            content += fragment.querySelector('Article').outerHTML;
            Num++;
        }
    });
    informationInner.insertAdjacentHTML('beforeend', content);
    informNum.innerHTML = Num;
}



//Обработка поиска
inputFind.addEventListener('keyup', (e) => {
    if (e.key === "Enter")
        render(inputFind.value);
});

btnFind.addEventListener('click', () => render(inputFind.value));


//Обработка кнопок вида списка
viewGrid.addEventListener('click', () => {
    viewFlag = 0;
    viewTable.classList.remove('active');
    viewGrid.classList.add('active');
    visibleHeaderLine.style.display = "none";
    render(inputFind.value);
});
viewTable.addEventListener('click', () => {
    viewFlag = 1;
    viewGrid.classList.remove('active');
    viewTable.classList.add('active');
    visibleHeaderLine.style.display = "flex";
    render(inputFind.value);
});


render();