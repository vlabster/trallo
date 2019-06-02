function submitReg() {
    webix.message(JSON.stringify($$("regForm").getValues(), null, 2));
    // $$("logForm").focus();
    webix.ajax("saveUser.php", $$("regForm").getValues(), function (data) {
        if (data == 0) {
            webix.message("Вы ввели не всю информацию");
        }
        else if (data == 1) {
            webix.message("Введённые пароли не совпадают");
        }
        else if (data == 2) {
            webix.message("Данный логин уже зарегестрирован");
        }
        else if (data == 3) {
            webix.message("Ошибка!");
        }
        else {
            let result = JSON.parse(data);
            webix.message(`Вы успешно зарегестрированы!`);
            $$('regForm').clear();

            //location.href = `http://trallo/boardList.php?login=${result.login}&id=${result.id}`;
            //window.open(`http://trallo/boardList.php?login=${result.login}&board=${result.id}`);
        }
    });
}

function submitLog() {
    webix.message(JSON.stringify($$("logForm").getValues(), null, 2));
    webix.ajax("checkReg.php", $$("logForm").getValues(), function (data) {
        if (data == 0) {
            webix.message("Неверный логин или пароль");
        }
        else {
            let result = JSON.parse(data);
            webix.message(`http://trallo/boardList.php?login=${result.login}&id=${result.id}`);
            location.href = `http://trallo/boardList.php?login=${result.login}&id=${result.id}`;
            //window.open(`http://trallo/boardList.php?login=${result.login}&board=${result.id}`);
        }
    });
}

webix.ui({
    type: "space", width: 400,
    rows: [
        {
            type: "clean",
            rows: [
                {
                    borderless: true, view: "tabbar", id: "tabbar", value: "listView", multiview: true, options: [
                        { value: 'Регистрация', id: 'regForm' },
                        { value: 'Войти', id: 'logForm' }
                    ]
                },
                {
                    animate: {
                        type: "slide",
                        direction: "top"
                    },
                    fitBiggest: true,
                    cells: [
                        {
                            view: "form",
                            id: "regForm",
                            elements: [
                                {
                                    rows: [
                                        { template: "ФИО", type: "section", height: 30 },
                                        { view: "text", name: "fullname" },
                                    ]
                                },
                                {
                                    rows: [
                                        { template: "Номер телефона", type: "section", height: 30 },
                                        { view: "text", name: "phone" },
                                    ]
                                },
                                {
                                    rows: [
                                        { template: "Логин", type: "section", height: 30 },
                                        { view: "text", name: "login" },
                                    ]
                                },
                                {
                                    rows: [
                                        { template: "Email", type: "section", height: 30 },
                                        { view: "text", type: "email", name: "email" },
                                    ]
                                },
                                {
                                    rows: [
                                        { template: "Пароль", type: "section", height: 30 },
                                        { view: "text", type: "password", name: "password" },
                                    ]
                                },
                                {
                                    rows: [
                                        { template: "Повторите пароль", type: "section", height: 30 },
                                        { view: "text", type: "password", name: "passwordRep" },
                                    ]
                                },
                                {
                                    rows: [
                                        { template: "Описание", type: "section", height: 30 },
                                        { view: "textarea", name: "description", height: 100 },
                                    ]
                                },
                                {
                                    margin: 5, cols: [
                                        { view: "button", value: "Регистрация", css: "webix_primary", click: submitReg },
                                        { view: "button", value: "Отмена" }
                                    ]
                                }
                            ]

                        },
                        {
                            view: "form",
                            id: "logForm",
                            container: "areaA",
                            width: 300,
                            elements: [
                                { view: "text", label: "Логин", name: "login" },
                                { view: "text", type: "password", label: "Пароль", name: "password" },
                                {
                                    margin: 5, cols: [
                                        { view: "button", value: "Войти", css: "webix_primary", click: submitLog },
                                        { view: "button", value: "Отмена" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

// $$("formView").bind($$("listView"));