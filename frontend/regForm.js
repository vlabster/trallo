function submitReg() {
    webix.message(JSON.stringify($$("regForm").getValues(), null, 2));
    webix.ajax("saveUser.php", $$("regForm").getValues(), function (data) {
        if (data == 0) {
            webix.message("Вы ввели не всю информацию");
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
    view: "form",
    paddingX:650,
    id: "regForm",
    width: 1600,
    elements: [
        {
            rows: [
                {
                    cols: [
                        { template: "Зарегестрированы?", type: "text" },
                        { view: "button", value: "Войти", css: "webix_primary", click: function() {
                            location.href = `http://trallo/login.php`;
                        } },
                    ]
                }
            ]
        },
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
    // elements: [
    //     { view: "text", label: "ФИО", name: "fullname" },
    //     { view: "text", label: "Номер телефона", name: "phone" },
    //     { view: "text", label: "Логин", name: "login" },
    //     { view: "text", type: "email", label: "Email", name: "email" },
    //     { view: "text", type: "password", label: "Пароль", name: "password" },
    //     { view: "text", type: "password", label: "Повторите пароль", name: "passwordRep" },
    //     { view: "textarea", label: "Описание", name: "description", height: 200 },
    //     {
    //         margin: 5, cols: [
    //             { view: "button", value: "Регистрация", css: "webix_primary", click: submit },
    //             { view: "button", value: "Отмена" }
    //         ]
    //     }
    // ]
});