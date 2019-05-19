webix.ready(function() {
    webix.ui ({
        view:"form",
	    id:"myForm",
	    container: "areaA",
	    width: 350,
	    elements: [
            { view: "text", label: "Логин", name: "login" },
            { view: "text", label: "Пароль", name: "password", type: "password" },
            { view: "text", label: "ФИО", name: "fullname" },
            { view: "text", label: "Номер телефона", name: "phone" },
            { view: "text", label: "Электронная почта", name: "email" },
            { view: "text", label: "Описание", name: "description" },
            // { view: "checkbox", labelRight: "I accept terms of use", name: "accept" },
            { view: "button", value: "Submit", width: 150, align: "center", click: submit }
	    ]
    });
});