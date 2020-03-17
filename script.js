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
    // str = str.replace(/\s/g, ''); // Удаление пробелов
    informationInner.innerHTML = ""; //Очещаем область с информацией
    let Num = 0; //Количество пользователей на экране
    ar = DATA.member; //Получаем массив данных
    ar.forEach(element => { //перебираем массив пользовталей
        if (element.name.indexOf(condition) != -1 ||
            element.nameNat.indexOf(condition) != -1 ||
            element.surname.indexOf(condition) != -1 ||
            element.surnameNat.indexOf(condition) != -1 ||
            condition == '') { //проверка условий поиска
            if (viewFlag === 0)
                informationInner.insertAdjacentHTML('beforeend',
                    `<Article class="information__item">
                <div class="information__bio">
                    <img src="https://placehold.it/150/333" alt="Photo" class="item__photo" width="150px">
                    <div>
                        <h2 class="item__name">${element.name+' '+element.surname}</h2>
                        <h3 class="item__name_native">${element.nameNat+' '+element.surnameNat}</h3>
                    </div>
                </div>
                <div class="information__addition">
                    <div class="item__departament">
                        <i class="fas fa-briefcase"></i>
                        <span>${element.departament}</span>
                    </div>
                    <div class="item__room">
                        <i class="fas fa-door-closed"></i>
                        <span>${element.room}</span>
                    </div>
                </div>
            </Article>`);
            else
                informationInner.insertAdjacentHTML('beforeend',
                    `<Article class="information__item_line">
            <div class="information__bio_line">
                <img src="https://placehold.it/150/333" alt="Photo" class="item__photo_line"
                    width="150px">
                <div>
                    <h2 class="item__name_line">${element.name+' '+element.surname}</h2>
                    <h3 class="item__name_native_line">${element.nameNat+' '+element.surnameNat}</h3>
                </div>
            </div>
            <div class="information__addition_line">
                <div class="item__departament_line">
                    <i class="fas fa-briefcase"></i>
                    <span>${element.departament}</span>
                </div>
                <div class="item__room_line">
                    <i class="fas fa-door-closed"></i>
                    <span>${element.room}</span>
                </div>
            </div>
        </Article>`
                );
            Num++;
        }
        informNum.innerHTML = Num + " employees displayed ";
    });
}


//Обработка поиска
inputFind.onkeyup = (e) => {
    if (e.key === "Enter")
        render(inputFind.value);
};

btnFind.onclick = () => render(inputFind.value);


//Обработка кнопок вида списка
viewGrid.onclick = () => {
    viewFlag = 0;
    viewTable.classList.remove('active');
    viewGrid.classList.add('active');
    visibleHeaderLine.style.display = "none";
    render(inputFind.value);
};
viewTable.onclick = () => {
    viewFlag = 1;
    viewGrid.classList.remove('active');
    viewTable.classList.add('active');
    visibleHeaderLine.style.display = "flex";
    render(inputFind.value);
};


render();